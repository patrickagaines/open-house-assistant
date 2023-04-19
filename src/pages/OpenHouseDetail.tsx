import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../components/buttons/Button";
import { FormShade } from "../components/forms/FormShade";
import { GuestCheckInForm } from "../components/forms/GuestCheckInForm";
import { OpenHouseDeleteForm } from "../components/forms/OpenHouseDeleteForm";
import { OpenHouseEditForm } from "../components/forms/OpenHouseEditForm";
import { PageLoader } from "../components/navigation/PageLoader";
import { GuestTable } from "../components/tables/GuestTable";
import { useGuestsByOpenHouseId } from "../hooks/guests/useGuestsByOpenHouseId";
import { useOpenHouseById } from "../hooks/openhouses/useOpenHouseById";
import { Guest, OpenHouse } from "../ts/interfaces";
import { formatDate } from "../utils/format-date";
import { formatTime } from "../utils/format-time";

export const OpenHouseDetail = () => {
  const params = useParams();
  const { isLoading, error, data: openHouse } = useOpenHouseById(Number(params.openHouseId));
  const guestQuery = useGuestsByOpenHouseId(Number(params.openHouseId));

  const [guestCheckInForm, setGuestCheckInForm] = useState<"closed" | "open">("closed");
  const [activeOpenHouse, setActiveOpenHouse] = useState<OpenHouse>();
  const [openHouseEditForm, setOpenHouseEditForm] = useState<"closed" | "open">("closed");
  const [openHouseToEdit, setOpenHouseToEdit] = useState<OpenHouse>();
  const [openHouseDeleteForm, setOpenHouseDeleteForm] = useState<"closed" | "open">("closed");
  const [openHouseToDelete, setOpenHouseToDelete] = useState<OpenHouse>();
  const [guestEditForm, setGuestEditForm] = useState<"closed" | "open">("closed");
  const [guestToEdit, setGuestToEdit] = useState<Guest>();

  const handleGuestCheckInForm = () => {
    if (guestCheckInForm === "closed") {
      setGuestCheckInForm("open");
    } else {
      setGuestCheckInForm("closed");
    }
  };

  const handleLaunchButton = () => {
    setActiveOpenHouse(openHouse);
    handleGuestCheckInForm();
  };

  const handleOpenHouseEditForm = () => {
    if (openHouseEditForm === "closed") {
      setOpenHouseEditForm("open");
    } else {
      setOpenHouseEditForm("closed");
    }
  };

  const handleEditButton = () => {
    setOpenHouseToEdit(openHouse);
    handleOpenHouseEditForm();
  };

  const handleOpenHouseDeleteForm = () => {
    if (openHouseDeleteForm === "closed") {
      setOpenHouseDeleteForm("open");
    } else {
      setOpenHouseDeleteForm("closed");
    }
  };

  const handleDeleteButton = () => {
    setOpenHouseToDelete(openHouse);
    handleOpenHouseDeleteForm();
  };

  const handleGuestEditForm = () => {
    if (guestEditForm === "closed") {
      setGuestEditForm("open");
    } else {
      setGuestEditForm("closed");
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <section>
        <h1 className="text-center text-2xl md:text-3xl">Manage Open House</h1>
        {openHouse !== undefined && (
          <div className="mt-6 sm:flex sm:justify-center sm:space-x-6 lg:justify-start">
            <div className="theme-surface theme-border p-4 sm:w-400">
              <span className="block text-center font-bold">
                {openHouse.streetAddress}
                {openHouse.unitNumber ? ` Unit ${openHouse.unitNumber}, ` : ` `}
                <br />
                {openHouse.city}, {openHouse.state} {openHouse.zipCode}
              </span>
              <hr className="mt-4 border-lt-border dark:border-dk-border" />
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
              <Button type="button" onClick={handleLaunchButton}>
                Launch
              </Button>
              <Button type="button" onClick={handleEditButton}>
                Edit
              </Button>
              <Button type="button" onClick={handleDeleteButton}>
                Delete
              </Button>
            </div>
          </div>
        )}
        {error instanceof Error && (
          <span className="mt-6 block text-center">There was an error loading your data.</span>
        )}
      </section>
      <GuestTable
        query={guestQuery}
        handleOpenEditForm={handleGuestEditForm}
        setGuestToEdit={setGuestToEdit}
      />
      {guestCheckInForm === "open" && (
        <GuestCheckInForm
          handleCloseCheckInForm={handleGuestCheckInForm}
          activeOpenHouse={activeOpenHouse}
        />
      )}
      {openHouseEditForm === "open" && (
        <FormShade>
          <OpenHouseEditForm
            handleCloseEditForm={handleOpenHouseEditForm}
            openHouseToEdit={openHouseToEdit}
            setOpenHouseToEdit={setOpenHouseToEdit}
          />
        </FormShade>
      )}
      {openHouseDeleteForm === "open" && (
        <FormShade>
          <OpenHouseDeleteForm
            handleCloseDeleteForm={handleOpenHouseDeleteForm}
            openHouseToDelete={openHouseToDelete}
          />
        </FormShade>
      )}
      <ToastContainer />
    </>
  );
};
