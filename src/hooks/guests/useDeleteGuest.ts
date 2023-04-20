import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Delete } from "../../api/guests";
import { MutationHookProps } from "../../ts/interfaces";

export const useDeleteGuest = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((guestId: number) => Delete(auth, guestId), {
    onSuccess: successCallback,
  });
  return mutation;
};
