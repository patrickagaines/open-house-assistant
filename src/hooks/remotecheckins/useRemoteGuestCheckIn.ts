import { useMutation } from "@tanstack/react-query";
import { RemoteCheckIn } from "../../api/endpoints/remote-check-ins";
import { errorCallback } from "../../api/services";
import { GuestToCheckIn, MutationHookProps } from "../../ts/interfaces";

export const useRemoteGuestCheckIn = ({ successCallback }: MutationHookProps) => {
  const mutation = useMutation((guestToCheckIn: GuestToCheckIn) => RemoteCheckIn(guestToCheckIn), {
    onSuccess: successCallback,
    onError: errorCallback,
  });
  return mutation;
};
