import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GetOne } from "../../api/properties";

export const usePropertyById = (propertyId: number) => {
  const auth = useAuth0();
  return useQuery({
    queryKey: ["properties", propertyId],
    queryFn: () => GetOne(auth, propertyId),
  });
};
