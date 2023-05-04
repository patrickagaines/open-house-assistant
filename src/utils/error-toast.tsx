import { toast } from "react-toastify";
import { CloseIcon, ErrorIcon } from "../assets/icons";

const CustomContent = (message: string) => (
  <span className="flex items-center">
    <ErrorIcon />
    <span className="ml-3 text-sm">{message}</span>
  </span>
);

export const errorToast = (message: string) => {
  toast(CustomContent(message), {
    closeButton: CloseIcon,
    position: "bottom-center",
    autoClose: 2250,
    pauseOnHover: true,
    draggable: true,
    className:
      "theme-surface text-lt-text dark:text-dk-text dark:border dark:border-dk-border rounded-sm shadow-md dark:shadow-none",
    progressClassName:
      "bg-gradient-to-r from-lt-primary to-lt-primary dark:from-dk-text dark:to-dk-text",
  });
};