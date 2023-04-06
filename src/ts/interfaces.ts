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

export interface Property {
  id?: number;
  streetAddress: string;
  unitNumber?: string;
  city: string;
  state: string;
  zipCode: string;
}
