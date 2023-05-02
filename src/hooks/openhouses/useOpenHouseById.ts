import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GetOne } from "../../api/endpoints/open-houses";

export const useOpenHouseById = (openHouseId: number) => {
  const auth = useAuth0();
  return useQuery({
    queryKey: ["openHouses", openHouseId],
    queryFn: () => GetOne(auth, openHouseId),
  });
};
