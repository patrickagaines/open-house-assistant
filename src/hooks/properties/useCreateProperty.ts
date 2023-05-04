import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Post } from "../../api/endpoints/properties";
import { errorCallback } from "../../api/services";
import { MutationHookProps, NewProperty } from "../../ts/interfaces";

export const useCreateProperty = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((newProperty: NewProperty) => Post(auth, newProperty), {
    onSuccess: successCallback,
    onError: errorCallback,
  });
  return mutation;
};
