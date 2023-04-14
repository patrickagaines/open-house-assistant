import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormShade } from "../components/forms/FormShade";
import { OpenHouseEditForm } from "../components/forms/OpenHouseEditForm";
import { OpenHousesTable } from "../components/tables/OpenHousesTable";
import { OpenHouse } from "../ts/interfaces";

export const Dashboard = () => {
  const [openHouseEditForm, setOpenHouseEditForm] = useState<"closed" | "open">("closed");
  const [openHouseToEdit, setOpenHouseToEdit] = useState<OpenHouse>();

  const handleOpenHouseEditForm = () => {
    if (openHouseEditForm === "closed") {
      setOpenHouseEditForm("open");
    } else {
      setOpenHouseEditForm("closed");
    }
  };

  return (
    <>
      <OpenHousesTable
        handleOpenEditForm={handleOpenHouseEditForm}
        setObjectToEdit={setOpenHouseToEdit}
      />
      {openHouseEditForm === "open" && (
        <FormShade>
          <OpenHouseEditForm
            handleCloseEditForm={handleOpenHouseEditForm}
            openHouseToEdit={openHouseToEdit}
            setOpenHouseToEdit={setOpenHouseToEdit}
          />
        </FormShade>
      )}
      <ToastContainer />
    </>
  );
};
