import { useState } from "react";
import { FormShade } from "../components/forms/FormShade";
import { OpenHouseCreateForm } from "../components/forms/OpenHouseCreateForm";
import { OpenHouseEditForm } from "../components/forms/OpenHouseEditForm";
import { OpenHouseTable } from "../components/tables/OpenHouseTable";
import { useOpenHouses } from "../hooks/openhouses/useOpenHouses";
import { OpenHouse } from "../ts/interfaces";
import { handleCloseForm, handleOpenForm } from "../utils/form-visibility-handlers";

export const Dashboard = () => {
  const openHouseQuery = useOpenHouses();

  const [openHouseCreateForm, setOpenHouseCreateForm] = useState<"closed" | "open">("closed");
  const [openHouseEditForm, setOpenHouseEditForm] = useState<"closed" | "open">("closed");

  const [openHouseToEdit, setOpenHouseToEdit] = useState<OpenHouse>();

  return (
    <>
      <OpenHouseTable
        query={openHouseQuery}
        title={<h1 className="text-center text-2xl md:text-3xl">Open Houses</h1>}
        handleOpenCreateForm={() => handleOpenForm(setOpenHouseCreateForm)}
        handleOpenEditForm={() => handleOpenForm(setOpenHouseEditForm)}
        setOpenHouseToEdit={setOpenHouseToEdit}
      />
      {openHouseCreateForm === "open" && (
        <FormShade>
          <OpenHouseCreateForm
            handleCloseCreateForm={() => handleCloseForm(setOpenHouseCreateForm)}
          />
        </FormShade>
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
    </>
  );
};
