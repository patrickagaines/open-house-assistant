import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Post } from "../../api/properties";
import { Property } from "../../ts/interfaces";

export const useCreateProperty = () => {
  const auth = useAuth0();
  const mutation = useMutation((property: Property) => Post(auth, property));
  return mutation;
};
