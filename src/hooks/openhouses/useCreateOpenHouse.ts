import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Post } from "../../api/endpoints/open-houses";
import { MutationHookProps, NewOpenHouse } from "../../ts/interfaces";

export const useCreateOpenHouse = ({ successCallback }: MutationHookProps) => {
  const auth = useAuth0();
  const mutation = useMutation((newOpenHouse: NewOpenHouse) => Post(auth, newOpenHouse), {
    onSuccess: successCallback,
  });
  return mutation;
};
