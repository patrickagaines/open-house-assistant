import { useState } from "react";
import { useRemoteGuestCheckIn } from "../../hooks/remotecheckins/useRemoteGuestCheckIn";
import { GuestToCheckIn, PhoneNumber, RemoteCheckInInfo } from "../../ts/interfaces";
import { validateRemoteGuestCheckIn } from "../../utils/guest-validations";
import { successToast } from "../../utils/success-toast";
import { Button } from "../buttons/Button";
import { PhoneInput } from "../inputs/PhoneInput";
import { TextInput } from "../inputs/TextInput";

interface RemoteCheckInFormProps {
  error: unknown;
  openHouseId: number;
  propertyId: number;
  remoteCheckInInfo: RemoteCheckInInfo | undefined;
}

export const RemoteCheckInForm = ({
  error,
  openHouseId,
  propertyId,
  remoteCheckInInfo,
}: RemoteCheckInFormProps) => {
  const initialGuestState = (): GuestToCheckIn => ({
    openHouseId: openHouseId,
    propertyId: propertyId,
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
  const redirectUrl = remoteCheckInInfo?.propertyUrl;

  const successCallback = () => {
    if (redirectUrl !== null && redirectUrl !== undefined && Boolean(new URL(redirectUrl))) {
      window.location.replace(redirectUrl);
    } else {
      setGuestToCheckIn(initialGuestState());
      setPhoneInput(initialPhoneInputState());
      successToast("Enjoy your tour!");
    }
  };

  const mutation = useRemoteGuestCheckIn({ successCallback });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestToCheckIn({
      ...guestToCheckIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(validateRemoteGuestCheckIn(guestToCheckIn, phoneInput));
  };

  return (
    <form
      className="mx-auto mt-3 max-w-md p-3 sm:mt-12 sm:w-100 md:mt-20"
      onSubmit={(e) => handleSubmit(e)}
    >
      {remoteCheckInInfo !== undefined && (
        <div className="text-center">
          <span>Welcome to</span>
          <h1 className="text-center text-lg sm:text-2xl">
            {remoteCheckInInfo.streetAddress}
            {remoteCheckInInfo.unitNumber && ` Unit ${remoteCheckInInfo.unitNumber}`}
          </h1>
        </div>
      )}
      {error instanceof Error && (
        <div className="text-center">
          <span className="text-error">
            Oops! There was a problem
            <br /> loading this open house.
          </span>
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
  );
};
