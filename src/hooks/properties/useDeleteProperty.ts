import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Delete } from "../../api/endpoints/properties";

export const useDeleteProperty = () => {
  const auth = useAuth0();
  const mutation = useMutation((propertyId: number) => Delete(auth, propertyId));
  return mutation;
};
