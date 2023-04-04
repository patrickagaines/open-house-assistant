import { NavMenuIcon } from "../../assets/icons";

interface NavMenuButtonProps {
  onClick: () => void;
}

export const NavMenuButton = ({ onClick }: NavMenuButtonProps) => {
  return (
    <button
      className="justify-self-end rounded-sm border border-lt-border bg-lt-surface dark:border-dk-border dark:bg-dk-surface"
      onClick={onClick}
    >
      <NavMenuIcon />
    </button>
  );
};