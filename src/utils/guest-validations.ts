import { Guest, GuestToCheckIn, GuestToRemove, OpenHouse, PhoneNumber } from "../ts/interfaces";

export const validateGuestToCheckIn = (
  guestToCheckIn: GuestToCheckIn,
  activeOpenHouse: OpenHouse | undefined,
  phoneInput: PhoneNumber
): GuestToCheckIn => {
  const validatedGuestToCheckIn: GuestToCheckIn = guestToCheckIn;

  if (activeOpenHouse !== undefined) {
    validatedGuestToCheckIn.openHouseId = activeOpenHouse.id;
    validatedGuestToCheckIn.propertyId = activeOpenHouse.propertyId;
  }

  validatedGuestToCheckIn.phoneNumber = `(${phoneInput.areaCode}) ${phoneInput.prefix}-${phoneInput.lineNumber}`;

  validatedGuestToCheckIn.emailAddress = validatedGuestToCheckIn.emailAddress.trim().toLowerCase();

  return validatedGuestToCheckIn;
};

export const ValidateGuest = (guest: Guest, phoneInput: PhoneNumber): Guest => {
  const validatedGuest: Guest = guest;

  validatedGuest.phoneNumber = `(${phoneInput.areaCode}) ${phoneInput.prefix}-${phoneInput.lineNumber}`;

  validatedGuest.emailAddress = validatedGuest.emailAddress.trim().toLowerCase();

  return validatedGuest;
};

export const validateGuestToRemove = (guest: Guest, openHouse: OpenHouse): GuestToRemove => {
  const guestToRemove: GuestToRemove = {
    guestId: guest.id,
    openHouseId: openHouse.id,
  };

  return guestToRemove;
};
