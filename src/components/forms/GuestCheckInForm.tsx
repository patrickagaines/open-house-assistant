import { useState } from "react";
import { Guest, OpenHouse } from "../../ts/interfaces";
import { Button } from "../buttons/Button";
import { EndOpenHouseButton } from "../buttons/EndOpenHouseButton";
import { TextInput } from "../inputs/TextInput";

interface GuestCheckInFormProps {
  handleCloseCheckInForm: () => void;
  activeOpenHouse: OpenHouse | undefined;
}

export const GuestCheckInForm = ({
  handleCloseCheckInForm,
  activeOpenHouse,
}: GuestCheckInFormProps) => {
  const initialState = (): Guest => ({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [guestToCheckIn, setGuestToCheckIn] = useState<Guest>(initialState());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestToCheckIn({
      ...guestToCheckIn,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground">
      <form className="mx-auto mt-3 max-w-md sm:mt-12 sm:w-100 md:mt-20">
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
          <TextInput
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            value={guestToCheckIn.phoneNumber}
            onChange={handleChange}
            maxLength={15}
            required
          />
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
        <div className="mt-6 flex justify-center space-x-4">
          <Button type="submit">Check In</Button>
        </div>
      </form>
      <EndOpenHouseButton handleEndOpenHouse={handleCloseCheckInForm} />
    </div>
  );
};
