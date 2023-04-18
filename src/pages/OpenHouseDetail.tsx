import { useParams } from "react-router-dom";
import { Button } from "../components/buttons/Button";
import { PageLoader } from "../components/navigation/PageLoader";
// import { useGuestsByOpenHouseId } from "../hooks/guests/useGuestsByOpenHouseId";
import { useOpenHouseById } from "../hooks/openhouses/useOpenHouseById";
import { formatDate } from "../utils/format-date";
import { formatTime } from "../utils/format-time";

export const OpenHouseDetail = () => {
  const params = useParams();
  const { isLoading, error, data: openHouse } = useOpenHouseById(Number(params.openHouseId));
  // const guestQuery = useGuestsByOpenHouseId(Number(params.openHouseId));

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <section>
      <h1 className="text-center text-2xl md:text-3xl">Manage Open House</h1>
      {openHouse !== undefined && (
        <div className="mt-6 sm:flex sm:justify-center sm:space-x-6 lg:justify-start">
          <div className="border border-lt-border bg-lt-surface p-4 dark:border-dk-border dark:bg-dk-surface sm:w-400">
            <span className="block text-center">
              {openHouse.streetAddress}
              {openHouse.unitNumber ? ` Unit ${openHouse.unitNumber}, ` : ` `}
              <br />
              {openHouse.city}, {openHouse.state} {openHouse.zipCode}
            </span>
            <hr className="mt-4 h-px border-none bg-lt-border dark:bg-dk-border" />
            <div className="mt-4">
              <span className="font-bold">Date: </span>
              <span>{formatDate(openHouse.date)}</span>
            </div>
            <div className="mt-4">
              <span className="font-bold">Start Time: </span>
              <span>{formatTime(openHouse.startTime)}</span>
            </div>
            <div className="mt-4">
              <span className="font-bold">End Time: </span>
              <span>{formatTime(openHouse.endTime)}</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
            <Button type="button">Launch</Button>
            <Button type="button">Edit</Button>
            <Button type="button">Delete</Button>
          </div>
        </div>
      )}
      {error instanceof Error && (
        <span className="mt-6 block text-center">There was an error loading your data.</span>
      )}
    </section>
  );
};
