import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useUpdateGuest } from "../../hooks/guests/useUpdateGuest";
import { Guest, PhoneNumber } from "../../ts/interfaces";
import { ValidateGuest } from "../../utils/guest-validations";
import { successToast } from "../../utils/success-toast";
import { Button } from "../buttons/Button";
import { PhoneInput } from "../inputs/PhoneInput";
import { TextInput } from "../inputs/TextInput";

interface GuestEditFormProps {
  handleCloseEditForm: () => void;
  guestToEdit: Guest | undefined;
  setGuestToEdit: React.Dispatch<React.SetStateAction<Guest | undefined>>;
}

export const GuestEditForm = ({
  handleCloseEditForm,
  guestToEdit,
  setGuestToEdit,
}: GuestEditFormProps) => {
  const initialPhoneInputState = (): PhoneNumber => ({
    areaCode: guestToEdit?.phoneNumber.substring(1, 4) ?? "",
    prefix: guestToEdit?.phoneNumber.substring(6, 9) ?? "",
    lineNumber: guestToEdit?.phoneNumber.substring(10, 15) ?? "",
  });

  const [phoneInput, setPhoneInput] = useState<PhoneNumber>(initialPhoneInputState());
  const queryClient = useQueryClient();

  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["guests"] });
    successToast("Guest info updated.");
    handleCloseEditForm();
  };

  const mutation = useUpdateGuest({ successCallback });

  useEffect(() => {
    if (guestToEdit !== undefined) {
      setGuestToEdit({
        ...guestToEdit,
        phoneNumber: `(${phoneInput.areaCode}) ${phoneInput.prefix}-${phoneInput.lineNumber}`,
      });
    }
  }, [phoneInput]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (guestToEdit !== undefined) {
      setGuestToEdit({
        ...guestToEdit,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestToEdit !== undefined) {
      mutation.mutate(ValidateGuest(guestToEdit, phoneInput));
    }
  };

  return (
    <div className="sm:theme-border h-screen overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground sm:h-auto sm:p-6">
      <form className="mt-1 sm:mt-0" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-lg">Edit Guest Info</h2>
        <div className="mt-6 flex flex-col space-y-2 sm:grid sm:grid-cols-2 sm:gap-x-2 sm:gap-y-2 sm:space-y-0">
          <TextInput
            id="firstName"
            name="firstName"
            label="First Name"
            value={guestToEdit?.firstName}
            onChange={handleChange}
            maxLength={35}
            required
          />
          <TextInput
            id="lastName"
            name="lastName"
            label="Last Name"
            value={guestToEdit?.lastName}
            onChange={handleChange}
            maxLength={35}
            required
          />
          <PhoneInput phoneInput={phoneInput} setPhoneInput={setPhoneInput} />
          <TextInput
            type="email"
            id="emailAddress"
            name="emailAddress"
            label="Email Address"
            value={guestToEdit?.emailAddress}
            onChange={handleChange}
            maxLength={60}
            required
          />
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <Button type="submit" isLoading={mutation.isLoading}>
            Update
          </Button>
          <Button type="button" onClick={handleCloseEditForm}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
