import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDeleteOpenHouse } from "../../hooks/openhouses/useDeleteOpenHouse";
import { OpenHouse } from "../../ts/interfaces";
import { Button } from "../buttons/Button";

interface OpenHouseDeleteFormProps {
  handleCloseDeleteForm: () => void;
  openHouseToDelete: OpenHouse | undefined;
}

export const OpenHouseDeleteForm = ({
  handleCloseDeleteForm,
  openHouseToDelete,
}: OpenHouseDeleteFormProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["openHouses"] });
    navigate("/dashboard", { state: { openHouseDeleted: true } });
  };

  const mutation = useDeleteOpenHouse({ successCallback });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (openHouseToDelete?.id !== undefined) {
      mutation.mutate(openHouseToDelete.id);
    }
  };

  return (
    <div className="sm:theme-border h-screen overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground sm:h-auto sm:p-6">
      <form className="mt-1 sm:mt-0" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-lg">Delete Open House</h2>
        <span className="mt-4 block">Are you sure you wish to delete this open house?</span>
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
