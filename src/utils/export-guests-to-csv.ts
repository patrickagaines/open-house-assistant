import { Guest } from "../ts/interfaces";
import { GuestToExport } from "../ts/types";

const headers = {
  firstName: "First Name",
  lastName: "Last Name",
  phoneNumber: "Phone Number",
  emailAddress: "Email Address",
};

const convertToCSV = (guests: Guest[]) => {
  const formattedGuests: GuestToExport[] = [];

  guests.forEach((guest) =>
    formattedGuests.push({
      firstName: guest.firstName,
      lastName: guest.lastName,
      phoneNumber: guest.phoneNumber,
      emailAddress: guest.emailAddress,
    })
  );

  formattedGuests.unshift(headers);

  let str = "";

  for (let i = 0; i < formattedGuests.length; i++) {
    let line = "";
    for (const index in formattedGuests[i]) {
      if (line !== "") {
        line += ",";
      }

      line += formattedGuests[i][index as keyof GuestToExport];
    }
    str += line + "\r\n";
  }

  return str;
};

export const exportGuestsToCSV = (guests: Guest[]) => {
  const csv = convertToCSV(guests);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  const link = document.createElement("a");

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "guests.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
