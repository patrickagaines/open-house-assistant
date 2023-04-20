import { NewProperty } from "../ts/interfaces";

export const validateNewProperty = (newProperty: NewProperty): NewProperty => {
  const validatedNewProperty = newProperty;

  if (validatedNewProperty.unitNumber?.trim() === "") {
    validatedNewProperty.unitNumber = null;
  }

  return validatedNewProperty;
};
