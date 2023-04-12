export const formatDate = (dateString: string) => {
  const date = new Date(`${dateString}T00:00:00`);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);

  return formattedDate;
};
