import { EditIcon } from "../../assets/icons";

interface TableEditButtonProps<T> {
  handleOpenEditForm: () => void;
  setObjectToEdit: React.Dispatch<React.SetStateAction<T | undefined>>;
  objectToEdit: T;
}

export const TableEditButton = <T,>({
  handleOpenEditForm,
  setObjectToEdit,
  objectToEdit,
}: TableEditButtonProps<T>) => {
  const handleClick = () => {
    setObjectToEdit(objectToEdit);
    handleOpenEditForm();
  };

  return (
    <button type="button" className="mx-auto block" onClick={handleClick}>
      <EditIcon />
    </button>
  );
};
