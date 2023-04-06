import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GetAll } from "../../api/open-houses";

export const useOpenHouses = () => {
  const auth = useAuth0();
  return useQuery({
    queryKey: ["openHouses"],
    queryFn: () => GetAll(auth),
  });
};
