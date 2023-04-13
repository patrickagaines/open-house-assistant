import { useQueryClient } from "@tanstack/react-query";
import { useUpdateOpenHouse } from "../../hooks/openhouses/useUpdateOpenHouse";
import { StateAbbreviations } from "../../ts/constants";
import { OpenHouse } from "../../ts/interfaces";
import { Button } from "../buttons/Button";
import { DateInput } from "../inputs/DateInput";
import { SelectInput } from "../inputs/SelectInput";
import { TextInput } from "../inputs/TextInput";
import { TimeInput } from "../inputs/TimeInput";

interface OpenHouseEditFormProps {
  handleCloseEditForm: () => void;
  openHouseToEdit: OpenHouse | undefined;
  setOpenHouseToEdit: React.Dispatch<React.SetStateAction<OpenHouse | undefined>>;
}

export const OpenHouseEditForm = ({
  handleCloseEditForm,
  openHouseToEdit,
  setOpenHouseToEdit,
}: OpenHouseEditFormProps) => {
  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["openHouses"] });
    handleCloseEditForm();
  };

  const mutation = useUpdateOpenHouse({ successCallback });
  const queryClient = useQueryClient();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (openHouseToEdit !== undefined) {
      if (e.target.type === "time") {
        e.target.value = `${e.target.value}:00`;
      }
      setOpenHouseToEdit({
        ...openHouseToEdit,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    if (openHouseToEdit !== undefined) {
      mutation.mutate(openHouseToEdit);
    }
  };

  return (
    <div
      className="h-screen overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground sm:h-auto sm:max-w-2xl sm:border sm:border-lt-border sm:p-6 sm:dark:border-dk-border"
      style={{ maxWidth: "640px" }}
    >
      <h2 className="mt-1 text-center text-lg sm:mt-0">Edit Open House</h2>
      <form className="mt-6">
        <div className="flex flex-col space-y-2">
          <div className="grid grid-cols-3 space-x-2">
            <DateInput
              id="date"
              name="date"
              label="Date"
              value={openHouseToEdit?.date}
              onChange={handleChange}
            />
            <TimeInput
              id="startTime"
              name="startTime"
              label="Start Time"
              value={openHouseToEdit?.startTime}
              onChange={handleChange}
            />
            <TimeInput
              id="endTime"
              name="endTime"
              label="End Time"
              value={openHouseToEdit?.endTime}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col space-y-2 sm:grid sm:grid-cols-2 sm:space-x-2 sm:space-y-0">
            <TextInput
              id="streetAddress"
              name="streetAddress"
              label="Street Address"
              value={openHouseToEdit?.streetAddress}
              onChange={handleChange}
            />
            <TextInput
              id="unitNumber"
              name="unitNumber"
              label="Unit Number"
              value={openHouseToEdit?.unitNumber ?? "_"}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-3 space-x-2">
            <TextInput
              id="city"
              name="city"
              label="City"
              value={openHouseToEdit?.city}
              onChange={handleChange}
            />
            <SelectInput
              id="state"
              name="state"
              label="State"
              options={StateAbbreviations}
              value={openHouseToEdit?.state}
              onChange={handleChange}
            />
            <TextInput
              id="zipCode"
              name="zipCode"
              label="Zip Code"
              value={openHouseToEdit?.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <Button onClick={handleSubmit}>Update</Button>
          <Button onClick={handleCloseEditForm}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};
