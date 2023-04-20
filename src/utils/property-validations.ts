import { NewProperty, Property } from "../ts/interfaces";

export const validateNewProperty = (newProperty: NewProperty): NewProperty => {
  const validatedNewProperty = newProperty;

  if (validatedNewProperty.unitNumber?.trim() === "") {
    validatedNewProperty.unitNumber = null;
  }

  return validatedNewProperty;
};

export const validateProperty = (property: Property): Property => {
  const validatedProperty = property;

  if (validatedProperty.unitNumber?.trim() === "") {
    validatedProperty.unitNumber = null;
  }

  return validatedProperty;
};
