import { useQueryClient } from "@tanstack/react-query";
import { useRemoveGuestFromOpenHouse } from "../../hooks/guests/useRemoveGuestFromOpenHouse";
import { Guest, OpenHouse } from "../../ts/interfaces";
import { validateGuestToRemove } from "../../utils/guest-validations";
import { successToast } from "../../utils/success-toast";
import { Button } from "../buttons/Button";

interface GuestRemoveFormProps {
  handleCloseRemoveForm: () => void;
  guestToRemove: Guest | undefined;
  activeOpenHouse: OpenHouse | undefined;
}

export const GuestRemoveForm = ({
  handleCloseRemoveForm,
  guestToRemove,
  activeOpenHouse,
}: GuestRemoveFormProps) => {
  const queryClient = useQueryClient();

  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["guests"] });
    successToast("Guest removed from open house.");
    handleCloseRemoveForm();
  };

  const mutation = useRemoveGuestFromOpenHouse({ successCallback });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestToRemove !== undefined && activeOpenHouse !== undefined) {
      mutation.mutate(validateGuestToRemove(guestToRemove, activeOpenHouse));
    }
  };

  return (
    <div className="sm:theme-border h-screen overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground sm:h-auto sm:max-w-lg sm:p-6">
      <form className="mt-1 sm:mt-0" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-lg">Remove Guest</h2>
        <span className="mt-4 block">
          Are you sure you wish to remove
          <span className="font-bold">
            {` ${guestToRemove?.firstName} ${guestToRemove?.lastName} `}
          </span>
          from this open house?
        </span>
        <span className="mt-4 block italic">
          The guest will remain in your database. To delete permanently, please visit the
          &ldquo;Guests&ldquo; tab.
        </span>
        <div className="mt-6 flex justify-center space-x-4">
          <Button type="submit" isLoading={mutation.isLoading}>
            Remove
          </Button>
          <Button type="button" onClick={handleCloseRemoveForm}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
