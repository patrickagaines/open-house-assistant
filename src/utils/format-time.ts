export const formatTime = (timeString: string) => {
  const minutes = timeString.substring(3, timeString.length - 3);
  let hours = timeString.substring(0, timeString.length - 6);
  const period = Number(hours) >= 12 ? "PM" : "AM";

  if (Number(hours) > 12) {
    hours = (Number(hours) - 12).toString();
  }

  if (Number(hours) === 0) {
    hours = "12";
  }

  return `${hours}:${minutes} ${period}`;
};
