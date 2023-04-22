import { useQueryClient } from "@tanstack/react-query";
import { useUpdateOpenHouse } from "../../hooks/openhouses/useUpdateOpenHouse";
import { stateSelectOptions } from "../../ts/constants";
import { OpenHouse } from "../../ts/interfaces";
import { validateOpenHouse } from "../../utils/open-house-validations";
import { successToast } from "../../utils/success-toast";
import { Button } from "../buttons/Button";
import { DateInput } from "../inputs/DateInput";
import { SelectInput } from "../inputs/SelectInput";
import { TextInput } from "../inputs/TextInput";
import { TimeInput } from "../inputs/TimeInput";

interface OpenHouseEditFormProps {
  handleCloseEditForm: () => void;
  openHouseToEdit: OpenHouse | undefined;
  setOpenHouseToEdit: React.Dispatch<React.SetStateAction<OpenHouse | undefined>>;
  disablePropertyFields?: boolean;
}

export const OpenHouseEditForm = ({
  handleCloseEditForm,
  openHouseToEdit,
  setOpenHouseToEdit,
  disablePropertyFields = false,
}: OpenHouseEditFormProps) => {
  const queryClient = useQueryClient();

  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["openHouses"] });
    queryClient.invalidateQueries({ queryKey: ["properties"] });
    successToast("Open house updated.");
    handleCloseEditForm();
  };

  const mutation = useUpdateOpenHouse({ successCallback });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (openHouseToEdit !== undefined) {
      setOpenHouseToEdit({
        ...openHouseToEdit,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (openHouseToEdit !== undefined) {
      mutation.mutate(validateOpenHouse(openHouseToEdit));
    }
  };

  return (
    <div className="sm:theme-border h-screen overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground sm:h-auto sm:p-6">
      <form className="mt-1 sm:mt-0" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-lg">Edit Open House</h2>
        <div className="mt-6 flex flex-col space-y-2">
          <div className="grid grid-cols-3 space-x-2">
            <DateInput
              id="date"
              name="date"
              label="Date"
              value={openHouseToEdit?.date}
              onChange={handleChange}
              required
            />
            <TimeInput
              id="startTime"
              name="startTime"
              label="Start Time"
              value={openHouseToEdit?.startTime}
              onChange={handleChange}
              required
            />
            <TimeInput
              id="endTime"
              name="endTime"
              label="End Time"
              value={openHouseToEdit?.endTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-2 sm:grid sm:grid-cols-2 sm:space-x-2 sm:space-y-0">
            <TextInput
              id="streetAddress"
              name="streetAddress"
              label="Street Address"
              value={openHouseToEdit?.streetAddress}
              onChange={handleChange}
              required
              maxLength={50}
              disabled={disablePropertyFields}
            />
            <TextInput
              id="unitNumber"
              name="unitNumber"
              label="Unit Number"
              value={openHouseToEdit?.unitNumber ?? "_"}
              onChange={handleChange}
              maxLength={10}
              disabled={disablePropertyFields}
            />
          </div>
          <div className="grid grid-cols-3 space-x-2">
            <TextInput
              id="city"
              name="city"
              label="City"
              value={openHouseToEdit?.city}
              onChange={handleChange}
              required
              maxLength={25}
              disabled={disablePropertyFields}
            />
            <SelectInput
              id="state"
              name="state"
              label="State"
              options={stateSelectOptions}
              value={openHouseToEdit?.state}
              onChange={handleChange}
              required
              disabled={disablePropertyFields}
            />
            <TextInput
              id="zipCode"
              name="zipCode"
              label="Zip Code"
              value={openHouseToEdit?.zipCode}
              onChange={handleChange}
              required
              maxLength={10}
              disabled={disablePropertyFields}
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
