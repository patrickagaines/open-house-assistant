import { Auth0ContextInterface, User } from "@auth0/auth0-react";
import { NewOpenHouse, OpenHouse } from "../../ts/interfaces";
import { handleErrors, handleNetworkError } from "../services";

const baseUrl = import.meta.env.VITE_API_SERVER_URL;
const endPoint = "open-houses";

export const GetAll = async (auth: Auth0ContextInterface<User>): Promise<OpenHouse[]> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .catch(handleNetworkError);

  return response;
};

//prettier-ignore
export const GetOne = async (auth: Auth0ContextInterface<User>, openHouseId: number): Promise<OpenHouse> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${openHouseId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .catch(handleNetworkError);

  return response;
};

//prettier-ignore
export const GetAllByProperty = async (auth: Auth0ContextInterface<User>, propertyId: number): Promise<OpenHouse[]> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/property/${propertyId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .catch(handleNetworkError);

  return response;
};

// prettier-ignore
export const Post = async (auth: Auth0ContextInterface<User>, newOpenHouse: NewOpenHouse): Promise<OpenHouse> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOpenHouse),
  })
    .then(handleErrors)
    .then((response) => response.json())
    .catch(handleNetworkError);

  return response;
};

// prettier-ignore
export const Put = async (auth: Auth0ContextInterface<User>, openHouse: OpenHouse): Promise<number> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${openHouse.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(openHouse),
  })
    .then(handleErrors)
    .then((response) => response.json())
    .catch(handleNetworkError);

  return response;
};

// prettier-ignore
export const Delete = async (auth: Auth0ContextInterface<User>, openHouseId: number): Promise<number> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${openHouseId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .catch(handleNetworkError);

  return response;
};
