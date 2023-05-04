import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { RemoveFromOpenHouse } from "../../api/endpoints/guests";
import { errorCallback } from "../../api/services";
import { GuestToRemove, MutationHookProps } from "../../ts/interfaces";

export const useRemoveGuestFromOpenHouse = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation(
    (guestToRemove: GuestToRemove) => RemoveFromOpenHouse(auth, guestToRemove),
    {
      onSuccess: successCallback,
      onError: errorCallback,
    }
  );
  return mutation;
};
