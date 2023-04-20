import { DeleteIcon, GuestRemoveIcon } from "../../assets/icons";

interface TableDeleteButtonProps<T> {
  handleOpenDeleteForm: () => void;
  setObjectToDelete: React.Dispatch<React.SetStateAction<T | undefined>>;
  objectToDelete: T;
  icon?: "delete" | "remove";
}

export const TableDeleteButton = <T,>({
  handleOpenDeleteForm,
  setObjectToDelete,
  objectToDelete,
  icon = "delete",
}: TableDeleteButtonProps<T>) => {
  const handleClick = () => {
    setObjectToDelete(objectToDelete);
    handleOpenDeleteForm();
  };

  return (
    <button type="button" className="mx-auto block" onClick={handleClick}>
      {icon === "delete" && <DeleteIcon />}
      {icon === "remove" && <GuestRemoveIcon />}
    </button>
  );
};
