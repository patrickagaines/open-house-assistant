import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GetAllByProperty } from "../../api/endpoints/guests";

export const useGuestsByPropertyId = (propertyId: number) => {
  const auth = useAuth0();
  return useQuery({
    queryKey: ["guests", "byProperty", propertyId],
    queryFn: () => GetAllByProperty(auth, propertyId),
  });
};
