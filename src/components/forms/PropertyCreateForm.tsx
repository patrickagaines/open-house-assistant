import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useCreateProperty } from "../../hooks/properties/useCreateProperty";
import { stateSelectOptions } from "../../ts/constants";
import { NewProperty } from "../../ts/interfaces";
import { errorToast } from "../../utils/error-toast";
import { validateNewProperty } from "../../utils/property-validations";
import { successToast } from "../../utils/success-toast";
import { Button } from "../buttons/Button";
import { SelectInput } from "../inputs/SelectInput";
import { TextInput } from "../inputs/TextInput";

interface PropertyCreateFormProps {
  handleCloseCreateForm: () => void;
}

export const PropertyCreateForm = ({ handleCloseCreateForm }: PropertyCreateFormProps) => {
  const initialState = (): NewProperty => ({
    streetAddress: "",
    unitNumber: null,
    city: "",
    state: "",
    zipCode: "",
  });

  const [newProperty, setNewProperty] = useState<NewProperty>(initialState());
  const queryClient = useQueryClient();

  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["properties"] });
    queryClient.invalidateQueries({ queryKey: ["openHouses"] });
    successToast("Property created.");
    handleCloseCreateForm();
  };

  const errorCallback = (error: Error) => {
    errorToast(error.message);
  };

  const mutation = useCreateProperty({ successCallback, errorCallback });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewProperty({
      ...newProperty,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(validateNewProperty(newProperty));
  };

  return (
    <div className="sm:theme-border h-screen overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground sm:h-auto sm:p-6">
      <form className="mt-1 sm:mt-0" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-lg">Create Property</h2>
        <div className="mt-6 flex flex-col space-y-2">
          <div className="flex flex-col space-y-2 sm:grid sm:grid-cols-2 sm:space-x-2 sm:space-y-0">
            <TextInput
              id="streetAddress"
              name="streetAddress"
              label="Street Address"
              value={newProperty.streetAddress}
              onChange={handleChange}
              required
              maxLength={50}
            />
            <TextInput
              id="unitNumber"
              name="unitNumber"
              label="Unit Number"
              value={newProperty.unitNumber ?? ""}
              onChange={handleChange}
              maxLength={10}
            />
          </div>
          <div className="grid grid-cols-3 space-x-2">
            <TextInput
              id="city"
              name="city"
              label="City"
              value={newProperty.city}
              onChange={handleChange}
              required
              maxLength={25}
            />
            <SelectInput
              id="state"
              name="state"
              label="State"
              options={stateSelectOptions}
              value={newProperty.state}
              onChange={handleChange}
              required
            />
            <TextInput
              id="zipCode"
              name="zipCode"
              label="Zip Code"
              value={newProperty.zipCode}
              onChange={handleChange}
              required
              maxLength={10}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <Button type="submit" isLoading={mutation.isLoading}>
            Create
          </Button>
          <Button type="button" onClick={handleCloseCreateForm}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
