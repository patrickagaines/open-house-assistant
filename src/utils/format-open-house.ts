import { OpenHouse } from "../ts/interfaces";

export const formatOpenHouse = (openHouse: OpenHouse): OpenHouse => {
  const formattedOpenHouse: OpenHouse = openHouse;

  if (formattedOpenHouse.startTime.length === 5) {
    formattedOpenHouse.startTime = `${formattedOpenHouse.startTime}:00`;
  }

  if (formattedOpenHouse.endTime.length === 5) {
    formattedOpenHouse.endTime = `${formattedOpenHouse.endTime}:00`;
  }

  if (formattedOpenHouse.unitNumber?.trim() === "") {
    formattedOpenHouse.unitNumber = null;
  }

  return formattedOpenHouse;
};
