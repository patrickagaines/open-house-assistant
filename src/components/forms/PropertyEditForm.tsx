import { useQueryClient } from "@tanstack/react-query";
import { useUpdateProperty } from "../../hooks/properties/useUpdateProperty";
import { stateSelectOptions } from "../../ts/constants";
import { Property } from "../../ts/interfaces";
import { validateProperty } from "../../utils/property-validations";
import { successToast } from "../../utils/success-toast";
import { Button } from "../buttons/Button";
import { SelectInput } from "../inputs/SelectInput";
import { TextInput } from "../inputs/TextInput";

interface PropertyEditFormProps {
  handleCloseEditForm: () => void;
  propertyToEdit: Property | undefined;
  setPropertyToEdit: React.Dispatch<React.SetStateAction<Property | undefined>>;
}

export const PropertyEditForm = ({
  handleCloseEditForm,
  propertyToEdit,
  setPropertyToEdit,
}: PropertyEditFormProps) => {
  const queryClient = useQueryClient();

  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["properties"] });
    queryClient.invalidateQueries({ queryKey: ["openHouses"] });
    successToast("Property updated.");
    handleCloseEditForm();
  };

  const mutation = useUpdateProperty({ successCallback });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (propertyToEdit !== undefined) {
      setPropertyToEdit({
        ...propertyToEdit,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (propertyToEdit !== undefined) {
      mutation.mutate(validateProperty(propertyToEdit));
    }
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
              value={propertyToEdit?.streetAddress}
              onChange={handleChange}
              required
              maxLength={50}
            />
            <TextInput
              id="unitNumber"
              name="unitNumber"
              label="Unit Number"
              value={propertyToEdit?.unitNumber ?? ""}
              onChange={handleChange}
              maxLength={10}
            />
          </div>
          <div className="grid grid-cols-3 space-x-2">
            <TextInput
              id="city"
              name="city"
              label="City"
              value={propertyToEdit?.city}
              onChange={handleChange}
              required
              maxLength={25}
            />
            <SelectInput
              id="state"
              name="state"
              label="State"
              options={stateSelectOptions}
              value={propertyToEdit?.state}
              onChange={handleChange}
              required
            />
            <TextInput
              id="zipCode"
              name="zipCode"
              label="Zip Code"
              value={propertyToEdit?.zipCode}
              onChange={handleChange}
              required
              maxLength={10}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <Button type="submit" isLoading={mutation.isLoading}>
            Update
          </Button>
          <Button type="button" onClick={handleCloseEditForm}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
