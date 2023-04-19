import { NewOpenHouse } from "../ts/interfaces";

export const validateOpenHouse = (newOpenHouse: NewOpenHouse): NewOpenHouse => {
  const validatedOpenHouse: NewOpenHouse = newOpenHouse;

  if (validatedOpenHouse.startTime.length === 5) {
    validatedOpenHouse.startTime = `${validatedOpenHouse.startTime}:00`;
  }

  if (validatedOpenHouse.endTime.length === 5) {
    validatedOpenHouse.endTime = `${validatedOpenHouse.endTime}:00`;
  }

  if (validatedOpenHouse.unitNumber?.trim() === "") {
    validatedOpenHouse.unitNumber = null;
  }

  return validatedOpenHouse;
};
