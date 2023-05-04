import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Post } from "../../api/endpoints/properties";
import { MutationHookProps, NewProperty } from "../../ts/interfaces";

export const useCreateProperty = ({ successCallback, errorCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((newProperty: NewProperty) => Post(auth, newProperty), {
    onSuccess: successCallback,
    onError: (error) => {
      if (error instanceof Error) errorCallback(error);
    },
  });
  return mutation;
};
