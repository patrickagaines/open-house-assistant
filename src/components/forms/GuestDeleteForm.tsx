import { useQueryClient } from "@tanstack/react-query";
import { useDeleteGuest } from "../../hooks/guests/useDeleteGuest";
import { Guest } from "../../ts/interfaces";
import { successToast } from "../../utils/success-toast";
import { Button } from "../buttons/Button";

interface GuestDeleteFormProps {
  handleCloseDeleteForm: () => void;
  guestToDelete: Guest | undefined;
}

export const GuestDeleteForm = ({ handleCloseDeleteForm, guestToDelete }: GuestDeleteFormProps) => {
  const queryClient = useQueryClient();

  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["guests"] });
    successToast("Guest deleted.");
    handleCloseDeleteForm();
  };

  const mutation = useDeleteGuest({ successCallback });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestToDelete !== undefined) {
      mutation.mutate(guestToDelete.id);
    }
  };

  return (
    <div className="sm:theme-border h-screen overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground sm:h-auto sm:max-w-lg sm:p-6">
      <form className="mt-1 sm:mt-0" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-lg">Delete Guest</h2>
        <span className="mt-4 block">
          Are you sure you wish to delete
          <span className="font-bold">
            {` ${guestToDelete?.firstName} ${guestToDelete?.lastName}`}
          </span>
          ?
        </span>
        <span className="mt-4 block italic">
          The guest will be permanently removed from your database.
        </span>
        <div className="mt-6 flex justify-center space-x-4">
          <Button type="submit" isLoading={mutation.isLoading}>
            Delete
          </Button>
          <Button type="button" onClick={handleCloseDeleteForm}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
