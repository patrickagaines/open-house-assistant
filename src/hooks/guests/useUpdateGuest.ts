import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Put } from "../../api/guests";
import { Guest, MutationHookProps } from "../../ts/interfaces";

export const useUpdateGuest = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((guest: Guest) => Put(auth, guest), {
    onSuccess: successCallback,
  });
  return mutation;
};
