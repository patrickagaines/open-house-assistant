import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useCreateOpenHouse } from "../../hooks/openhouses/useCreateOpenHouse";
import { useProperties } from "../../hooks/properties/useProperties";
import { stateSelectOptions } from "../../ts/constants";
import { OpenHouse, SelectInputOptions } from "../../ts/interfaces";
import { successToast } from "../../utils/success-toast";
import { validateOpenHouse } from "../../utils/validate-open-house";
import { Button } from "../buttons/Button";
import { DateInput } from "../inputs/DateInput";
import { SelectInput } from "../inputs/SelectInput";
import { TextInput } from "../inputs/TextInput";
import { TimeInput } from "../inputs/TimeInput";

interface OpenHouseCreateFormProps {
  handleCloseCreateForm: () => void;
}

export const OpenHouseCreateForm = ({ handleCloseCreateForm }: OpenHouseCreateFormProps) => {
  const initialState = (): OpenHouse => ({
    date: "",
    startTime: "",
    endTime: "",
    propertyId: 0,
    streetAddress: "",
    unitNumber: null,
    city: "",
    state: "",
    zipCode: "",
  });

  const [newOpenHouse, setNewOpenHouse] = useState<OpenHouse>(initialState());
  const queryClient = useQueryClient();

  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["openHouses"] });
    queryClient.invalidateQueries({ queryKey: ["properties"] });
    successToast("Open house created.");
    handleCloseCreateForm();
  };

  const mutation = useCreateOpenHouse({ successCallback });
  const { isLoading, error, data } = useProperties();

  const propertySelectOptions: SelectInputOptions[] = [{ label: "New Property", value: 0 }];

  if (data !== undefined) {
    data.forEach((row) =>
      propertySelectOptions.push({
        label: `${row.streetAddress}${row.unitNumber ? ` Unit ${row.unitNumber}` : ``}`,
        value: row.id!, //eslint-disable-line
      })
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewOpenHouse({
      ...newOpenHouse,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectProperty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (Number(e.target.value) === 0) {
      setNewOpenHouse({
        ...newOpenHouse,
        [e.target.name]: Number(e.target.value),
        streetAddress: "",
        unitNumber: null,
        city: "",
        state: "",
        zipCode: "",
      });
    } else {
      const selectedProperty = data?.filter((row) => row.id === Number(e.target.value))[0];

      if (selectedProperty !== undefined) {
        setNewOpenHouse({
          ...newOpenHouse,
          propertyId: Number(e.target.value),
          streetAddress: selectedProperty.streetAddress,
          unitNumber: selectedProperty.unitNumber,
          city: selectedProperty.city,
          state: selectedProperty.state,
          zipCode: selectedProperty.zipCode,
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(validateOpenHouse(newOpenHouse));
  };

  return (
    <div className="sm:theme-border h-screen overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground sm:h-auto sm:p-6">
      <form className="mt-1 sm:mt-0" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-lg">Create Open House</h2>
        <div className="mt-6 flex flex-col space-y-2">
          <div className="grid grid-cols-3 space-x-2">
            <DateInput
              id="date"
              name="date"
              label="Date"
              value={newOpenHouse.date}
              onChange={handleChange}
              required
            />
            <TimeInput
              id="startTime"
              name="startTime"
              label="Start Time"
              value={newOpenHouse.startTime}
              onChange={handleChange}
              required
            />
            <TimeInput
              id="endTime"
              name="endTime"
              label="End Time"
              value={newOpenHouse.endTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <SelectInput
              id="propertyId"
              name="propertyId"
              label="New or Existing Property"
              options={propertySelectOptions}
              value={newOpenHouse.propertyId}
              isLoading={isLoading}
              error={error}
              onChange={handleSelectProperty}
              required
            />
          </div>
          <div className="flex flex-col space-y-2 sm:grid sm:grid-cols-2 sm:space-x-2 sm:space-y-0">
            <TextInput
              id="streetAddress"
              name="streetAddress"
              label="Street Address"
              value={newOpenHouse.streetAddress}
              onChange={handleChange}
              required
              maxLength={50}
              disabled={newOpenHouse.propertyId !== 0}
            />
            <TextInput
              id="unitNumber"
              name="unitNumber"
              label="Unit Number"
              value={
                newOpenHouse.propertyId === 0
                  ? newOpenHouse.unitNumber ?? ""
                  : newOpenHouse.unitNumber ?? "_"
              }
              onChange={handleChange}
              maxLength={10}
              disabled={newOpenHouse.propertyId !== 0}
            />
          </div>
          <div className="grid grid-cols-3 space-x-2">
            <TextInput
              id="city"
              name="city"
              label="City"
              value={newOpenHouse.city}
              onChange={handleChange}
              required
              maxLength={25}
              disabled={newOpenHouse.propertyId !== 0}
            />
            <SelectInput
              id="state"
              name="state"
              label="State"
              options={stateSelectOptions}
              value={newOpenHouse.state}
              onChange={handleChange}
              required
              disabled={isLoading || error instanceof Error || newOpenHouse.propertyId !== 0}
            />
            <TextInput
              id="zipCode"
              name="zipCode"
              label="Zip Code"
              value={newOpenHouse.zipCode}
              onChange={handleChange}
              required
              maxLength={10}
              disabled={newOpenHouse.propertyId !== 0}
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
