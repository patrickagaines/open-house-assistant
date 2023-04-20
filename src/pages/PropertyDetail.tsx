import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../components/buttons/Button";
import { FormShade } from "../components/forms/FormShade";
import { PageLoader } from "../components/navigation/PageLoader";
import { usePropertyById } from "../hooks/properties/usePropertyById";

export const PropertyDetail = () => {
  const params = useParams();
  const { isLoading, error, data: property } = usePropertyById(Number(params.propertyId));

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
    </>
  );
};
