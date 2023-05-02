import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormShade } from "../components/forms/FormShade";
import { PropertyCreateForm } from "../components/forms/PropertyCreateForm";
import { PropertyEditForm } from "../components/forms/PropertyEditForm";
import { PropertyTable } from "../components/tables/PropertyTable";
import { useProperties } from "../hooks/properties/useProperties";
import { Property } from "../ts/interfaces";
import { handleCloseForm, handleOpenForm } from "../utils/form-visibility-handlers";

export const Properties = () => {
  const propertyQuery = useProperties();

  const [propertyCreateForm, setPropertyCreateForm] = useState<"closed" | "open">("closed");
  const [propertyEditForm, setPropertyEditForm] = useState<"closed" | "open">("closed");

  const [propertyToEdit, setPropertyToEdit] = useState<Property>();

  return (
    <>
      <PropertyTable
        query={propertyQuery}
        title={<h1 className="text-center text-2xl md:text-3xl">Properties</h1>}
        handleOpenCreateForm={() => handleOpenForm(setPropertyCreateForm)}
        handleOpenEditForm={() => handleOpenForm(setPropertyEditForm)}
        setPropertyToEdit={setPropertyToEdit}
      />
      {propertyCreateForm === "open" && (
        <FormShade>
          <PropertyCreateForm
            handleCloseCreateForm={() => handleCloseForm(setPropertyCreateForm)}
          />
        </FormShade>
      )}
      {propertyEditForm === "open" && (
        <FormShade>
          <PropertyEditForm
            handleCloseEditForm={() => handleCloseForm(setPropertyEditForm)}
            propertyToEdit={propertyToEdit}
            setPropertyToEdit={setPropertyToEdit}
          />
        </FormShade>
      )}
      <ToastContainer />
    </>
  );
};
