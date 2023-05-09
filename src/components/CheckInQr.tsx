import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { Button } from "./buttons/Button";

interface CheckInQrProps {
  openHouseId: number;
  propertyId: number;
}

export const CheckInQr = ({ openHouseId, propertyId }: CheckInQrProps) => {
  const [qr, setQr] = useState("");

  const baseUrl = import.meta.env.VITE_APP_DOMAIN;

  useEffect(() => {
    QRCode.toDataURL(
      `${baseUrl}/remote-check-ins/${openHouseId}/${propertyId}`,
      {
        width: 438,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        setQr(url);
      }
    );
  }, [openHouseId, propertyId]);

  const handleDownload = () => {
    const link = document.createElement("a");

    if (link.download !== undefined) {
      link.setAttribute("href", qr);
      link.setAttribute("download", "check-in-qr.png");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="items-center text-center lg:flex lg:space-x-6">
      <img
        className="theme-border mx-auto mb-4 mt-10 lg:mt-6"
        width={219}
        src={qr}
        alt="Check-in qr code."
      />
      <Button type="button" onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
};
