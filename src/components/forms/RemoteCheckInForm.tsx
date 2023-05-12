import { useState } from "react";
import { GuestToCheckIn, PhoneNumber } from "../../ts/interfaces";
import { Button } from "../buttons/Button";
import { PhoneInput } from "../inputs/PhoneInput";
import { TextInput } from "../inputs/TextInput";

interface RemoteCheckInFormProps {
  openHouseId: number;
  propertyId: number;
}

export const RemoteCheckInForm = ({ openHouseId, propertyId }: RemoteCheckInFormProps) => {
  const [guestToCheckIn, setGuestToCheckIn] = useState<GuestToCheckIn>({
    openHouseId: openHouseId,
    propertyId: propertyId,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [phoneInput, setPhoneInput] = useState<PhoneNumber>({
    areaCode: "",
    prefix: "",
    lineNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestToCheckIn({
      ...guestToCheckIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(guestToCheckIn);
  };

  return (
    <form
      className="mx-auto mt-3 max-w-md p-3 sm:mt-12 sm:w-100 md:mt-20"
      onSubmit={(e) => handleSubmit(e)}
    >
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
        <Button type="submit">Check In</Button>
      </div>
    </form>
  );
};
