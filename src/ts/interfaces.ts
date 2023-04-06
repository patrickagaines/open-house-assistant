export interface BasicOpenHouse {
  id?: number;
  date: string;
  startTime: string;
  endTime: string;
  propertyId: number;
}

export interface OpenHouse {
  id?: number;
  date: string;
  startTime: string;
  endTime: string;
  propertyId: number;
  streetAddress: string;
  unitNumber?: string;
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

export interface Property {
  id?: number;
  streetAddress: string;
  unitNumber?: string;
  city: string;
  state: string;
  zipCode: string;
}
