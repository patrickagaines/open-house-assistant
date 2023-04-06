import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Put } from "../../api/open-houses";
import { BasicOpenHouse } from "../../ts/interfaces";

export const useUpdateOpenHouse = () => {
  const auth = useAuth0();
  const mutation = useMutation((basicOpenHouse: BasicOpenHouse) => Put(auth, basicOpenHouse));
  return mutation;
};
