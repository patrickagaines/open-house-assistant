import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Delete } from "../../api/endpoints/properties";
import { MutationHookProps } from "../../ts/interfaces";

export const useDeleteProperty = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((propertyId: number) => Delete(auth, propertyId), {
    onSuccess: successCallback,
  });
  return mutation;
};
