import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useGuestCheckIn } from "../../hooks/guests/useGuestCheckIn";
import { GuestToCheckIn, OpenHouse, PhoneNumber } from "../../ts/interfaces";
import { successToast } from "../../utils/success-toast";
import { validateGuestCheckIn } from "../../utils/guest-validations";
import { Button } from "../buttons/Button";
import { EndOpenHouseButton } from "../buttons/EndOpenHouseButton";
import { PhoneInput } from "../inputs/PhoneInput";
import { TextInput } from "../inputs/TextInput";

interface GuestCheckInFormProps {
  handleCloseCheckInForm: () => void;
  activeOpenHouse: OpenHouse | undefined;
}

export const GuestCheckInForm = ({
  handleCloseCheckInForm,
  activeOpenHouse,
}: GuestCheckInFormProps) => {
  const initialGuestState = (): GuestToCheckIn => ({
    openHouseId: 0,
    propertyId: 0,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const initialPhoneInputState = (): PhoneNumber => ({
    areaCode: "",
    prefix: "",
    lineNumber: "",
  });

  const [guestToCheckIn, setGuestToCheckIn] = useState<GuestToCheckIn>(initialGuestState());
  const [phoneInput, setPhoneInput] = useState<PhoneNumber>(initialPhoneInputState());
  const queryClient = useQueryClient();

  const successCallback = () => {
    setGuestToCheckIn(initialGuestState());
    setPhoneInput(initialPhoneInputState());
    queryClient.invalidateQueries({ queryKey: ["guests"] });
    successToast("Enjoy your tour!");
  };

  const mutation = useGuestCheckIn({ successCallback });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestToCheckIn({
      ...guestToCheckIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(validateGuestCheckIn(guestToCheckIn, activeOpenHouse, phoneInput));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground">
      <form
        className="mx-auto mt-3 max-w-md sm:mt-12 sm:w-100 md:mt-20"
        onSubmit={(e) => handleSubmit(e)}
      >
        {activeOpenHouse !== undefined && (
          <div className="text-center">
            <span>Welcome to</span>
            <h2 className="text-center text-lg sm:text-2xl">
              {activeOpenHouse.streetAddress}
              {activeOpenHouse.unitNumber && ` Unit ${activeOpenHouse.unitNumber}`}
            </h2>
          </div>
        )}
        <div className="mt-4 flex flex-col space-y-2 sm:mt-6">
          <TextInput
            id="firstName"
            name="firstName"
            label="First Name"
            value={guestToCheckIn.firstName}
            onChange={handleChange}
            maxLength={35}
            required
          />
          <TextInput
            id="lastName"
            name="lastName"
            label="Last Name"
            value={guestToCheckIn.lastName}
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
            value={guestToCheckIn.emailAddress}
            onChange={handleChange}
            maxLength={60}
            required
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button type="submit" isLoading={mutation.isLoading}>
            Check In
          </Button>
        </div>
      </form>
      <EndOpenHouseButton handleEndOpenHouse={handleCloseCheckInForm} />
    </div>
  );
};
