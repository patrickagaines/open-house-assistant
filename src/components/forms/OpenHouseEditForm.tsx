interface OpenHouseEditFormProps {
  handleCloseEditForm: () => void;
}

export const OpenHouseEditForm = ({ handleCloseEditForm }: OpenHouseEditFormProps) => {
  return (
    <form>
      <button onClick={handleCloseEditForm}>Cancel</button>
    </form>
  );
};
