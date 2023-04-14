import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormShade } from "../components/forms/FormShade";
import { OpenHouseCreateForm } from "../components/forms/OpenHouseCreateForm";
import { OpenHouseEditForm } from "../components/forms/OpenHouseEditForm";
import { OpenHousesTable } from "../components/tables/OpenHousesTable";
import { OpenHouse } from "../ts/interfaces";

export const Dashboard = () => {
  const [openHouseCreateForm, setOpenHouseCreateForm] = useState<"closed" | "open">("closed");
  const [openHouseEditForm, setOpenHouseEditForm] = useState<"closed" | "open">("closed");
  const [openHouseToEdit, setOpenHouseToEdit] = useState<OpenHouse>();

  const handleOpenHouseCreateForm = () => {
    if (openHouseCreateForm === "closed") {
      setOpenHouseCreateForm("open");
    } else {
      setOpenHouseCreateForm("closed");
    }
  };

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
        handleOpenCreateForm={handleOpenHouseCreateForm}
        handleOpenEditForm={handleOpenHouseEditForm}
        setObjectToEdit={setOpenHouseToEdit}
      />
      {openHouseCreateForm === "open" && (
        <FormShade>
          <OpenHouseCreateForm handleCloseCreateForm={handleOpenHouseCreateForm} />
        </FormShade>
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
      <ToastContainer />
    </>
  );
};
