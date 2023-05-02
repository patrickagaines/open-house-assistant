import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDeleteProperty } from "../../hooks/properties/useDeleteProperty";
import { Property } from "../../ts/interfaces";
import { Button } from "../buttons/Button";

interface PropertyDeleteFormProps {
  handleCloseDeleteForm: () => void;
  propertyToDelete: Property | undefined;
}

export const PropertyDeleteForm = ({
  handleCloseDeleteForm,
  propertyToDelete,
}: PropertyDeleteFormProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const successCallback = () => {
    queryClient.invalidateQueries({ queryKey: ["properties"] });
    navigate("/properties", { state: { propertyDeleted: true } });
  };

  const mutation = useDeleteProperty({ successCallback });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (propertyToDelete !== undefined) {
      mutation.mutate(propertyToDelete.id);
    }
  };

  return (
    <div className="sm:theme-border h-screen overflow-y-scroll bg-lt-ground p-3 dark:bg-dk-ground sm:h-auto sm:p-6">
      <form className="mt-1 sm:mt-0" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-lg">Delete Property</h2>
        <span className="mt-4 block">Are you sure you wish to delete this property?</span>
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
