import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/buttons/Button";
import { FormShade } from "../components/forms/FormShade";
import { OpenHouseCreateForm } from "../components/forms/OpenHouseCreateForm";
import { OpenHouseEditForm } from "../components/forms/OpenHouseEditForm";
import { PageLoader } from "../components/navigation/PageLoader";
import { GuestTable } from "../components/tables/GuestTable";
import { OpenHouseTable } from "../components/tables/OpenHouseTable";
import { useGuestsByPropertyId } from "../hooks/guests/useGuestsByPropertyId";
import { useOpenHousesByPropertyId } from "../hooks/openhouses/useOpenHousesByPropertyId";
import { usePropertyById } from "../hooks/properties/usePropertyById";
import { OpenHouse } from "../ts/interfaces";
import { handleCloseForm, handleOpenForm } from "../utils/form-visibility-handlers";

export const PropertyDetail = () => {
  const params = useParams();
  const { isLoading, error, data: property } = usePropertyById(Number(params.propertyId));
  const openHouseQuery = useOpenHousesByPropertyId(Number(params.propertyId));
  const guestQuery = useGuestsByPropertyId(Number(params.propertyId));

  const [openHouseCreateForm, setOpenHouseCreateForm] = useState<"closed" | "open">("closed");
  const [openHouseEditForm, setOpenHouseEditForm] = useState<"closed" | "open">("closed");

  const [openHouseToEdit, setOpenHouseToEdit] = useState<OpenHouse>();

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
                <Button type="button">Edit</Button>
                <Button type="button">Delete</Button>
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
            disablePropertyFields={true}
          />
        </FormShade>
      )}
    </>
  );
};
