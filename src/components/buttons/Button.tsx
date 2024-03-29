import { ButtonLoaderIcon } from "../../assets/icons";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ type, children, isLoading, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className="h-8 w-24 rounded-sm bg-lt-primary text-sm text-primary-color-text hover:bg-dk-primary dark:bg-dk-primary dark:hover:bg-lt-primary"
      onClick={onClick}
    >
      {isLoading === true ? <ButtonLoaderIcon /> : children}
    </button>
  );
};
