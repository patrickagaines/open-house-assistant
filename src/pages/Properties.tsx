import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormShade } from "../components/forms/FormShade";
import { PropertyCreateForm } from "../components/forms/PropertyCreateForm";
import { PropertyTable } from "../components/tables/PropertyTable";
import { useProperties } from "../hooks/properties/useProperties";
import { Property } from "../ts/interfaces";

export const Properties = () => {
  const propertyQuery = useProperties();

  const [propertyCreateForm, setPropertyCreateForm] = useState<"closed" | "open">("closed");
  const [propertyEditForm, setPropertyEditForm] = useState<"closed" | "open">("closed");
  const [propertyToEdit, setPropertyToEdit] = useState<Property>();

  const handlePropertyCreateForm = () => {
    if (propertyCreateForm === "closed") {
      setPropertyCreateForm("open");
    } else {
      setPropertyCreateForm("closed");
    }
  };

  const handlePropertyEditForm = () => {
    if (propertyEditForm === "closed") {
      setPropertyEditForm("open");
    } else {
      setPropertyEditForm("closed");
    }
  };

  return (
    <>
      <PropertyTable
        query={propertyQuery}
        title={<h1 className="text-center text-2xl md:text-3xl">Properties</h1>}
        handleOpenCreateForm={handlePropertyCreateForm}
        handleOpenEditForm={handlePropertyEditForm}
        setPropertyToEdit={setPropertyToEdit}
      />
      {propertyCreateForm === "open" && (
        <FormShade>
          <PropertyCreateForm handleCloseCreateForm={handlePropertyCreateForm} />
        </FormShade>
      )}
      <ToastContainer />
    </>
  );
};
