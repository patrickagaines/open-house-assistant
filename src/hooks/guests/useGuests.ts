import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GetAll } from "../../api/guests";

export const useGuests = () => {
  const auth = useAuth0();
  return useQuery({
    queryKey: ["guests"],
    queryFn: () => GetAll(auth),
  });
};
