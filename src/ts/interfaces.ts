export interface OpenHouse {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  propertyId: number;
  streetAddress: string;
  unitNumber: string | null;
  city: string;
  state: string;
  zipCode: string;
}

export interface NewOpenHouse {
  date: string;
  startTime: string;
  endTime: string;
  propertyId: number;
  streetAddress: string;
  unitNumber: string | null;
  city: string;
  state: string;
  zipCode: string;
}

export interface Guest {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}

export interface GuestToCheckIn {
  openHouseId: number;
  propertyId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}

export interface GuestToRemove {
  guestId: number;
  openHouseId: number;
}

export interface PhoneNumber {
  areaCode: string;
  prefix: string;
  lineNumber: string;
}

export interface Property {
  id?: number;
  streetAddress: string;
  unitNumber: string | null;
  city: string;
  state: string;
  zipCode: string;
}

export interface SelectInputOptions {
  label: string;
  value: string | number;
}

export interface MutationHookProps {
  successCallback: () => void;
}
