import { Auth0ContextInterface, User } from "@auth0/auth0-react";
import { Guest, GuestToCheckIn, GuestToRemove } from "../ts/interfaces";

const baseUrl = import.meta.env.VITE_API_SERVER_URL;
const endPoint = "guests";

export const GetAll = async (auth: Auth0ContextInterface<User>): Promise<Guest[]> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

// prettier-ignore
export const GetOne = async (auth: Auth0ContextInterface<User>, guestId: number): Promise<Guest> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${guestId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

// prettier-ignore
export const GetAllByProperty = async (auth: Auth0ContextInterface, propertyId: number): Promise<Guest[]> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/property/${propertyId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

// prettier-ignore
export const GetAllByOpenHouse = async (auth: Auth0ContextInterface, openHouseId: number): Promise<Guest[]> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/open-house/${openHouseId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

// prettier-ignore
export const CheckIn = async (auth: Auth0ContextInterface<User>, guestToCheckIn: GuestToCheckIn): Promise<Guest> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(guestToCheckIn),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const Put = async (auth: Auth0ContextInterface<User>, guest: Guest): Promise<number> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${guest.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(guest),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

// prettier-ignore
export const Delete = async (auth: Auth0ContextInterface<User>, guestId: number): Promise<number> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${guestId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

// prettier-ignore
export const RemoveFromOpenHouse = async (auth: Auth0ContextInterface<User>, guestToRemove: GuestToRemove): Promise<number> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${guestToRemove.guestId}/open-house/${guestToRemove.openHouseId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
