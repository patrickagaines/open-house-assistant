import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Post } from "../../api/open-houses";
import { BasicOpenHouse } from "../../ts/interfaces";

export const useCreateOpenHouse = () => {
  const auth = useAuth0();
  const mutation = useMutation((basicOpenHouse: BasicOpenHouse) => Post(auth, basicOpenHouse));
  return mutation;
};
