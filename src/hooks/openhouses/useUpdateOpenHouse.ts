import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Put } from "../../api/open-houses";
import { MutationHookProps, OpenHouse } from "../../ts/interfaces";

export const useUpdateOpenHouse = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((openHouse: OpenHouse) => Put(auth, openHouse), {
    onSuccess: successCallback,
  });
  return mutation;
};
