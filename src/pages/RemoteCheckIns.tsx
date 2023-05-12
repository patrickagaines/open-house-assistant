import { useParams } from "react-router-dom";
import { RemoteCheckInForm } from "../components/forms/RemoteCheckInForm";
import { useRemoteCheckInInfo } from "../hooks/remotecheckins/useRemoteCheckInInfo";

// import { PageLoader } from "../components/navigation/PageLoader";

export const RemoteCheckIns = () => {
  const { openHouseId, propertyId } = useParams();
  const { isLoading, error, data: remoteCheckInInfo } = useRemoteCheckInInfo(Number(propertyId));

  // if (isLoading) {
  //   return <PageLoader />;
  // }

  // if (error instanceof Error) {
  //   return <p className="mt-6 text-center text-error">Could not load check-in info.</p>;
  // }

  return (
    <>
      {openHouseId !== undefined && (
        <RemoteCheckInForm openHouseId={Number(openHouseId)} propertyId={Number(propertyId)} />
      )}
    </>
  );
};
