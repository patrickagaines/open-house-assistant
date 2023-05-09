import { useState } from "react";
import { useParams } from "react-router-dom";
import { CheckInQr } from "../components/CheckInQr";
import { Button } from "../components/buttons/Button";
import { FormShade } from "../components/forms/FormShade";
import { GuestCheckInForm } from "../components/forms/GuestCheckInForm";
import { GuestEditForm } from "../components/forms/GuestEditForm";
import { GuestRemoveForm } from "../components/forms/GuestRemoveForm";
import { OpenHouseDeleteForm } from "../components/forms/OpenHouseDeleteForm";
import { OpenHouseEditForm } from "../components/forms/OpenHouseEditForm";
import { PageLoader } from "../components/navigation/PageLoader";
import { GuestTable } from "../components/tables/GuestTable";
import { useGuestsByOpenHouseId } from "../hooks/guests/useGuestsByOpenHouseId";
import { useOpenHouseById } from "../hooks/openhouses/useOpenHouseById";
import { Guest, OpenHouse } from "../ts/interfaces";
import { handleCloseForm, handleOpenForm } from "../utils/form-visibility-handlers";
import { formatDate } from "../utils/format-date";
import { formatTime } from "../utils/format-time";

export const OpenHouseDetail = () => {
  const params = useParams();
  const { isLoading, error, data: openHouse } = useOpenHouseById(Number(params.openHouseId));
  const guestQuery = useGuestsByOpenHouseId(Number(params.openHouseId));

  const [guestCheckInForm, setGuestCheckInForm] = useState<"closed" | "open">("closed");
  const [openHouseEditForm, setOpenHouseEditForm] = useState<"closed" | "open">("closed");
  const [openHouseDeleteForm, setOpenHouseDeleteForm] = useState<"closed" | "open">("closed");
  const [guestEditForm, setGuestEditForm] = useState<"closed" | "open">("closed");
  const [guestRemoveForm, setGuestRemoveForm] = useState<"closed" | "open">("closed");

  const [activeOpenHouse, setActiveOpenHouse] = useState<OpenHouse>();
  const [openHouseToEdit, setOpenHouseToEdit] = useState<OpenHouse>();
  const [openHouseToDelete, setOpenHouseToDelete] = useState<OpenHouse>();
  const [guestToEdit, setGuestToEdit] = useState<Guest>();
  const [guestToRemove, setGuestToRemove] = useState<Guest>();

  const handleLaunchButton = () => {
    setActiveOpenHouse(openHouse);
    handleOpenForm(setGuestCheckInForm);
  };

  const handleEditButton = () => {
    setOpenHouseToEdit(openHouse);
    handleOpenForm(setOpenHouseEditForm);
  };

  const handleDeleteButton = () => {
    setOpenHouseToDelete(openHouse);
    handleOpenForm(setOpenHouseDeleteForm);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <h1 className="text-center text-2xl md:text-3xl">Manage Open House</h1>
      <section className="justify-between lg:flex">
        <div>
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
        </div>
        <div>
          {openHouse !== undefined && (
            <CheckInQr openHouseId={openHouse.id} propertyId={openHouse.propertyId} />
          )}
        </div>
      </section>
      <GuestTable
        query={guestQuery}
        title={
          <h2 className="mt-10 text-center text-2xl md:text-3xl lg:mt-12">Open House Guests</h2>
        }
        handleOpenEditForm={() => handleOpenForm(setGuestEditForm)}
        setGuestToEdit={setGuestToEdit}
        handleOpenDeleteForm={() => handleOpenForm(setGuestRemoveForm)}
        setGuestToDelete={setGuestToRemove}
        deleteIcon="remove"
      />
      {guestCheckInForm === "open" && (
        <GuestCheckInForm
          handleCloseCheckInForm={() => handleCloseForm(setGuestCheckInForm)}
          activeOpenHouse={activeOpenHouse}
        />
      )}
      {openHouseEditForm === "open" && (
        <FormShade>
          <OpenHouseEditForm
            handleCloseEditForm={() => handleCloseForm(setOpenHouseEditForm)}
            openHouseToEdit={openHouseToEdit}
            setOpenHouseToEdit={setOpenHouseToEdit}
          />
        </FormShade>
      )}
      {openHouseDeleteForm === "open" && (
        <FormShade>
          <OpenHouseDeleteForm
            handleCloseDeleteForm={() => handleCloseForm(setOpenHouseDeleteForm)}
            openHouseToDelete={openHouseToDelete}
          />
        </FormShade>
      )}
      {guestEditForm === "open" && (
        <FormShade>
          <GuestEditForm
            handleCloseEditForm={() => handleCloseForm(setGuestEditForm)}
            guestToEdit={guestToEdit}
            setGuestToEdit={setGuestToEdit}
          />
        </FormShade>
      )}
      {guestRemoveForm === "open" && (
        <FormShade>
          <GuestRemoveForm
            handleCloseRemoveForm={() => handleCloseForm(setGuestRemoveForm)}
            guestToRemove={guestToRemove}
            activeOpenHouse={openHouse}
          />
        </FormShade>
      )}
    </>
  );
};
