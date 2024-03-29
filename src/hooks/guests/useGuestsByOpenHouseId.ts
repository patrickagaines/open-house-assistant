import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GetAllByOpenHouse } from "../../api/endpoints/guests";

export const useGuestsByOpenHouseId = (openHouseId: number) => {
  const auth = useAuth0();
  return useQuery({
    queryKey: ["guests", "byOpenHouse", openHouseId],
    queryFn: () => GetAllByOpenHouse(auth, openHouseId),
  });
};
