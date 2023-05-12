import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RemoteCheckInForm } from "../components/forms/RemoteCheckInForm";
import { PageLoader } from "../components/navigation/PageLoader";
import { useRemoteCheckInInfo } from "../hooks/remotecheckins/useRemoteCheckInInfo";

export const RemoteCheckIns = () => {
  const { openHouseId, propertyId } = useParams();
  const { isLoading, error, data: remoteCheckInInfo } = useRemoteCheckInInfo(Number(propertyId));

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <RemoteCheckInForm
        error={error}
        openHouseId={Number(openHouseId)}
        propertyId={Number(propertyId)}
        remoteCheckInInfo={remoteCheckInInfo}
      />
      <ToastContainer />
    </>
  );
};
