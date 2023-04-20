import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { FormShade } from "../components/forms/FormShade";
import { GuestDeleteForm } from "../components/forms/GuestDeleteForm";
import { GuestEditForm } from "../components/forms/GuestEditForm";
import { GuestTable } from "../components/tables/GuestTable";
import { useGuests } from "../hooks/guests/useGuests";
import { Guest } from "../ts/interfaces";

export const Guests = () => {
  const guestQuery = useGuests();

  const [guestEditForm, setGuestEditForm] = useState<"closed" | "open">("closed");
  const [guestDeleteForm, setGuestDeleteForm] = useState<"closed" | "open">("closed");
  const [guestToEdit, setGuestToEdit] = useState<Guest>();
  const [guestToDelete, setGuestToDelete] = useState<Guest>();

  const handleGuestEditForm = () => {
    if (guestEditForm === "closed") {
      setGuestEditForm("open");
    } else {
      setGuestEditForm("closed");
    }
  };

  const handleGuestDeleteForm = () => {
    if (guestDeleteForm === "closed") {
      setGuestDeleteForm("open");
    } else {
      setGuestDeleteForm("closed");
    }
  };

  return (
    <>
      <GuestTable
        query={guestQuery}
        title={<h1 className="text-center text-2xl md:text-3xl">Guests</h1>}
        handleOpenEditForm={handleGuestEditForm}
        setGuestToEdit={setGuestToEdit}
        handleOpenDeleteForm={handleGuestDeleteForm}
        setGuestToDelete={setGuestToDelete}
      />
      {guestEditForm === "open" && (
        <FormShade>
          <GuestEditForm
            handleCloseEditForm={handleGuestEditForm}
            guestToEdit={guestToEdit}
            setGuestToEdit={setGuestToEdit}
          />
        </FormShade>
      )}
      {guestDeleteForm === "open" && (
        <FormShade>
          <GuestDeleteForm
            handleCloseDeleteForm={handleGuestDeleteForm}
            guestToDelete={guestToDelete}
          />
        </FormShade>
      )}
      <ToastContainer />
    </>
  );
};
