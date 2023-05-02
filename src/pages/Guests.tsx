import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { FormShade } from "../components/forms/FormShade";
import { GuestDeleteForm } from "../components/forms/GuestDeleteForm";
import { GuestEditForm } from "../components/forms/GuestEditForm";
import { GuestTable } from "../components/tables/GuestTable";
import { useGuests } from "../hooks/guests/useGuests";
import { Guest } from "../ts/interfaces";
import { handleCloseForm, handleOpenForm } from "../utils/form-visibility-handlers";

export const Guests = () => {
  const guestQuery = useGuests();

  const [guestEditForm, setGuestEditForm] = useState<"closed" | "open">("closed");
  const [guestDeleteForm, setGuestDeleteForm] = useState<"closed" | "open">("closed");

  const [guestToEdit, setGuestToEdit] = useState<Guest>();
  const [guestToDelete, setGuestToDelete] = useState<Guest>();

  return (
    <>
      <GuestTable
        query={guestQuery}
        title={<h1 className="text-center text-2xl md:text-3xl">Guests</h1>}
        handleOpenEditForm={() => handleOpenForm(setGuestEditForm)}
        setGuestToEdit={setGuestToEdit}
        handleOpenDeleteForm={() => handleOpenForm(setGuestDeleteForm)}
        setGuestToDelete={setGuestToDelete}
      />
      {guestEditForm === "open" && (
        <FormShade>
          <GuestEditForm
            handleCloseEditForm={() => handleCloseForm(setGuestEditForm)}
            guestToEdit={guestToEdit}
            setGuestToEdit={setGuestToEdit}
          />
        </FormShade>
      )}
      {guestDeleteForm === "open" && (
        <FormShade>
          <GuestDeleteForm
            handleCloseDeleteForm={() => handleCloseForm(setGuestDeleteForm)}
            guestToDelete={guestToDelete}
          />
        </FormShade>
      )}
      <ToastContainer />
    </>
  );
};
