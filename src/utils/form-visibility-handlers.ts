export const handleOpenForm = (
  setForm: React.Dispatch<React.SetStateAction<"closed" | "open">>
) => {
  setForm("open");
};

export const handleCloseForm = (
  setForm: React.Dispatch<React.SetStateAction<"closed" | "open">>
) => {
  setForm("closed");
};
