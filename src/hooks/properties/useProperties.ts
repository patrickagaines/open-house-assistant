import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GetAll } from "../../api/endpoints/properties";

export const useProperties = () => {
  const auth = useAuth0();
  return useQuery({
    queryKey: ["properties"],
    queryFn: () => GetAll(auth),
  });
};
