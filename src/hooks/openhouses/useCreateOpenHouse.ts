import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Post } from "../../api/open-houses";
import { MutationHookProps, OpenHouse } from "../../ts/interfaces";

export const useCreateOpenHouse = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((openHouse: OpenHouse) => Post(auth, openHouse), {
    onSuccess: successCallback,
  });
  return mutation;
};
