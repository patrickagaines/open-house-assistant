import { useQuery } from "@tanstack/react-query";
import { GetRemoteCheckInInfo } from "../../api/endpoints/remote-check-ins";

export const useRemoteCheckInInfo = (propertyId: number) => {
  return useQuery({
    queryKey: ["remoteCheckIns", propertyId],
    queryFn: () => GetRemoteCheckInInfo(propertyId),
  });
};
