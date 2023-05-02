import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { CheckIn } from "../../api/endpoints/guests";
import { GuestToCheckIn, MutationHookProps } from "../../ts/interfaces";

export const useGuestCheckIn = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((guestToCheckIn: GuestToCheckIn) => CheckIn(auth, guestToCheckIn), {
    onSuccess: successCallback,
  });
  return mutation;
};
