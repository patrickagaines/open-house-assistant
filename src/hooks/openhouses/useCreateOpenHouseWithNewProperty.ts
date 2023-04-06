import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { PostWithNewProperty } from "../../api/open-houses";
import { OpenHouse } from "../../ts/interfaces";

export const useCreateOpenHouseWithNewProperty = () => {
  const auth = useAuth0();
  const mutation = useMutation((openHouse: OpenHouse) => PostWithNewProperty(auth, openHouse));
  return mutation;
};
