import { GuestToCheckIn, OpenHouse, PhoneNumber } from "../ts/interfaces";

export const validateGuestToCheckIn = (
  guestToCheckIn: GuestToCheckIn,
  activeOpenHouse: OpenHouse | undefined,
  phoneInput: PhoneNumber
): GuestToCheckIn => {
  const validatedGuestToCheckIn: GuestToCheckIn = guestToCheckIn;

  if (activeOpenHouse !== undefined && activeOpenHouse.id !== undefined) {
    validatedGuestToCheckIn.openHouseId = activeOpenHouse.id;
    validatedGuestToCheckIn.propertyId = activeOpenHouse.propertyId;
  }

  validatedGuestToCheckIn.phoneNumber = `(${phoneInput.areaCode}) ${phoneInput.prefix}-${phoneInput.lineNumber}`;

  validatedGuestToCheckIn.emailAddress = validatedGuestToCheckIn.emailAddress.trim().toLowerCase();

  return validatedGuestToCheckIn;
};
