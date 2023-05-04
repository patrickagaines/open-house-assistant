import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Put } from "../../api/endpoints/properties";
import { errorCallback } from "../../api/services";
import { MutationHookProps, Property } from "../../ts/interfaces";

export const useUpdateProperty = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((property: Property) => Put(auth, property), {
    onSuccess: successCallback,
    onError: errorCallback,
  });
  return mutation;
};
