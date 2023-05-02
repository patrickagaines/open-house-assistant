import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/buttons/Button";
import { FormShade } from "../components/forms/FormShade";
import { GuestDeleteForm } from "../components/forms/GuestDeleteForm";
import { GuestEditForm } from "../components/forms/GuestEditForm";
import { OpenHouseCreateForm } from "../components/forms/OpenHouseCreateForm";
import { OpenHouseEditForm } from "../components/forms/OpenHouseEditForm";
import { PropertyDeleteForm } from "../components/forms/PropertyDeleteForm";
import { PropertyEditForm } from "../components/forms/PropertyEditForm";
import { PageLoader } from "../components/navigation/PageLoader";
import { GuestTable } from "../components/tables/GuestTable";
import { OpenHouseTable } from "../components/tables/OpenHouseTable";
import { useGuestsByPropertyId } from "../hooks/guests/useGuestsByPropertyId";
import { useOpenHousesByPropertyId } from "../hooks/openhouses/useOpenHousesByPropertyId";
import { usePropertyById } from "../hooks/properties/usePropertyById";
import { Guest, OpenHouse, Property } from "../ts/interfaces";
import { handleCloseForm, handleOpenForm } from "../utils/form-visibility-handlers";

export const PropertyDetail = () => {
  const params = useParams();
  const { isLoading, error, data: property } = usePropertyById(Number(params.propertyId));
  const openHouseQuery = useOpenHousesByPropertyId(Number(params.propertyId));
  const guestQuery = useGuestsByPropertyId(Number(params.propertyId));

  const [propertyDeleteForm, setPropertyDeleteForm] = useState<"closed" | "open">("closed");
  const [propertyEditForm, setPropertyEditForm] = useState<"closed" | "open">("closed");
  const [openHouseCreateForm, setOpenHouseCreateForm] = useState<"closed" | "open">("closed");
  const [openHouseEditForm, setOpenHouseEditForm] = useState<"closed" | "open">("closed");
  const [guestEditForm, setGuestEditForm] = useState<"closed" | "open">("closed");
  const [guestDeleteForm, setGuestDeleteForm] = useState<"closed" | "open">("closed");

  const [propertyToDelete, setPropertyToDelete] = useState<Property>();
  const [propertyToEdit, setPropertyToEdit] = useState<Property>();
  const [openHouseToEdit, setOpenHouseToEdit] = useState<OpenHouse>();
  const [guestToEdit, setGuestToEdit] = useState<Guest>();
  const [guestToDelete, setGuestToDelete] = useState<Guest>();

  const handleEditButton = () => {
    setPropertyToEdit(property);
    handleOpenForm(setPropertyEditForm);
  };

  const handleDeleteButton = () => {
    setPropertyToDelete(property);
    handleOpenForm(setPropertyDeleteForm);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <section>
        <h1 className="text-center text-2xl md:text-3xl">Manage Property</h1>
        {property !== undefined && (
          <div className="mt-6 sm:flex sm:justify-center sm:space-x-6 lg:justify-start">
            <div className="theme-surface theme-border p-4 sm:w-400">
              <span className="block text-center font-bold">
                {property.streetAddress}
                {property.unitNumber ? ` Unit ${property.unitNumber}, ` : ` `}
                <br />
                {property.city}, {property.state} {property.zipCode}
              </span>
              <hr className="mt-4 border-lt-border dark:border-dk-border" />
              <div className="mt-6 flex justify-center space-x-2">
                <Button type="button" onClick={handleEditButton}>
                  Edit
                </Button>
                <Button type="button" onClick={handleDeleteButton}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        )}
        {error instanceof Error && (
          <span className="mt-6 block text-center">There was an error loading your data.</span>
        )}
      </section>
      <OpenHouseTable
        query={openHouseQuery}
        title={
          <h2 className="mt-10 text-center text-2xl md:text-3xl lg:mt-12">Property Open Houses</h2>
        }
        showPropertyColumns={false}
        handleOpenCreateForm={() => handleOpenForm(setOpenHouseCreateForm)}
        handleOpenEditForm={() => handleOpenForm(setOpenHouseEditForm)}
        setOpenHouseToEdit={setOpenHouseToEdit}
      />
      <GuestTable
        query={guestQuery}
        title={<h2 className="mt-10 text-center text-2xl md:text-3xl lg:mt-12">Property Guests</h2>}
        handleOpenEditForm={() => handleOpenForm(setGuestEditForm)}
        setGuestToEdit={setGuestToEdit}
        handleOpenDeleteForm={() => handleOpenForm(setGuestDeleteForm)}
        setGuestToDelete={setGuestToDelete}
      />
      {propertyEditForm === "open" && (
        <FormShade>
          <PropertyEditForm
            handleCloseEditForm={() => handleCloseForm(setPropertyEditForm)}
            propertyToEdit={propertyToEdit}
            setPropertyToEdit={setPropertyToEdit}
          />
        </FormShade>
      )}
      {propertyDeleteForm === "open" && (
        <FormShade>
          <PropertyDeleteForm
            handleCloseDeleteForm={() => handleCloseForm(setPropertyDeleteForm)}
            propertyToDelete={propertyToDelete}
          />
        </FormShade>
      )}
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
            disablePropertyFields={true}
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
      {guestDeleteForm === "open" && (
        <FormShade>
          <GuestDeleteForm
            handleCloseDeleteForm={() => handleCloseForm(setGuestDeleteForm)}
            guestToDelete={guestToDelete}
          />
        </FormShade>
      )}
    </>
  );
};
