import { NavMenuIcon } from "../../assets/icons";

interface NavMenuButtonProps {
  onClick: () => void;
}

export const NavMenuButton = ({ onClick }: NavMenuButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Toggle Navigation Menu"
      className="theme-surface theme-border justify-self-end rounded-sm"
      onClick={onClick}
    >
      <NavMenuIcon />
    </button>
  );
};
