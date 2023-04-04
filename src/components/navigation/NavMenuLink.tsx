import { NavLink } from "react-router-dom";

interface NavMenuLinkProps {
  children: React.ReactNode;
  route: string;
  Icon: React.FC;
  handleClick: () => void;
}

export const NavMenuLink = ({ children, route, Icon, handleClick }: NavMenuLinkProps) => {
  return (
    <NavLink className="flex items-center space-x-2 text-sm" to={route} onClick={handleClick}>
      <Icon />
      <span>{children}</span>
    </NavLink>
  );
};
