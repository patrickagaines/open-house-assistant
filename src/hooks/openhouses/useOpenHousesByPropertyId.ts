import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GetAllByProperty } from "../../api/open-houses";

export const useOpenHousesByPropertyId = (propertyId: number) => {
  const auth = useAuth0();
  return useQuery({
    queryKey: ["openHouses", "byProperty", propertyId],
    queryFn: () => GetAllByProperty(auth, propertyId),
  });
};
