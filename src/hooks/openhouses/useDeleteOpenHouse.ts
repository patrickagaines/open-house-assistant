import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Delete } from "../../api/endpoints/open-houses";
import { errorCallback } from "../../api/services";
import { MutationHookProps } from "../../ts/interfaces";

export const useDeleteOpenHouse = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((openHouseId: number) => Delete(auth, openHouseId), {
    onSuccess: successCallback,
    onError: errorCallback,
  });
  return mutation;
};
