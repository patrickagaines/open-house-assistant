import { GuestToCheckIn, RemoteCheckInInfo } from "../../ts/interfaces";
import { handleErrors } from "../services";

const baseUrl = import.meta.env.VITE_API_SERVER_URL;
const endPoint = "remote-check-ins";

// prettier-ignore
export const GetRemoteCheckInInfo = async (propertyId: number): Promise<RemoteCheckInInfo> => {

  const response = await fetch(`${baseUrl}/${endPoint}/${propertyId}`)
    .then(handleErrors)
    .then((response) => response.json());

  return response;
}

export const RemoteCheckIn = async (guestToCheckIn: GuestToCheckIn): Promise<number> => {
  const response = await fetch(`${baseUrl}/${endPoint}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(guestToCheckIn),
  })
    .then(handleErrors)
    .then((response) => response.status);

  return response;
};
