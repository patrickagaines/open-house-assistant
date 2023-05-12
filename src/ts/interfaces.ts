export interface OpenHouse extends NewOpenHouse {
  id: number;
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
  id: number;
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

export interface PropertyWithUrl extends Property {
  propertyUrl: string | null;
}

export interface Property extends NewProperty {
  id: number;
}

export interface NewProperty {
  streetAddress: string;
  unitNumber: string | null;
  city: string;
  state: string;
  zipCode: string;
}

export interface RemoteCheckInInfo {
  streetAddress: string;
  unitNumber: string | null;
  propertyUrl: string | null;
}

export interface SelectInputOptions {
  label: string;
  value: string | number;
}

export interface MutationHookProps {
  successCallback: () => void;
}
