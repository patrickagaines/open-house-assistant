import { Auth0ContextInterface, User } from "@auth0/auth0-react";
import { NewProperty, Property } from "../ts/interfaces";

const baseUrl = import.meta.env.VITE_API_SERVER_URL;
const endPoint = "properties";

export const GetAll = async (auth: Auth0ContextInterface<User>): Promise<Property[]> => {
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
export const GetOne = async (auth: Auth0ContextInterface<User>, propertyId: number): Promise<Property> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${propertyId}`, {
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
export const Post = async (auth: Auth0ContextInterface<User>, newProperty: NewProperty): Promise<Property> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(newProperty),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

// prettier-ignore
export const Put = async (auth: Auth0ContextInterface<User>, property: Property): Promise<number> => {
  const accessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${property.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(property),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

// prettier-ignore
export const Delete = async (auth: Auth0ContextInterface<User>, propertyId: number): Promise<number> => {
  const acessToken = await auth.getAccessTokenSilently();

  const response = await fetch(`${baseUrl}/${endPoint}/${propertyId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${acessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
