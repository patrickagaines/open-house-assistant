import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Put } from "../../api/properties"
import { Property } from "../../ts/interfaces";

export const useUpdateProperty = () => {
  const auth = useAuth0();
  const mutation = useMutation((property: Property) => Put(auth, property));
  return mutation;
};
