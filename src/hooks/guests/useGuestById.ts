import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GetOne } from "../../api/guests";

export const useGuestById = (guestId: number) => {
  const auth = useAuth0();
  return useQuery({
    queryKey: ["guestById"],
    queryFn: () => GetOne(auth, guestId),
  });
};
