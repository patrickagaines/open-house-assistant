import { Auth0ContextInterface, User } from "@auth0/auth0-react";
import { BasicOpenHouse, OpenHouse } from "../ts/interfaces";

const baseUrl = import.meta.env.VITE_API_SERVER_URL;
const endPoint = "open-houses";

export const GetAll = async (auth: Auth0ContextInterface<User>): Promise<OpenHouse[]> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());

  return response;
};

//prettier-ignore
export const GetOne = async (auth: Auth0ContextInterface<User>, openHouseId: number): Promise<OpenHouse> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${openHouseId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());

  return response;
};

//prettier-ignore
export const GetAllByProperty = async (auth: Auth0ContextInterface<User>, propertyId: number): Promise<OpenHouse[]> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/property/${propertyId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());

  return response;
};

// prettier-ignore
export const Post = async (auth: Auth0ContextInterface<User>, basicOpenHouse: BasicOpenHouse): Promise<OpenHouse> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(basicOpenHouse),
  }).then((res) => res.json());

  return response;
};

// prettier-ignore
export const PostWithNewProperty = async (auth: Auth0ContextInterface<User>, openHouse: OpenHouse): Promise<OpenHouse> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(openHouse),
  }).then((res) => res.json());

  return response;
};

// prettier-ignore
export const Put = async (auth: Auth0ContextInterface<User>, basicOpenHouse: BasicOpenHouse): Promise<number> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${basicOpenHouse.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(basicOpenHouse),
  }).then((res) => res.status);

  return response;
};

export const Delete = async (auth: Auth0ContextInterface<User>, openHouseId: number): Promise<number> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${openHouseId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.status);

  return response;
}
