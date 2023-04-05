import { NavLink } from "react-router-dom";
import { ChevronLeftIcon } from "../../assets/icons";

interface NavMenuLinkProps {
  children: React.ReactNode;
  route: string;
  Icon: React.FC;
  handleClick: () => void;
}

export const NavMenuLink = ({ children, route, Icon, handleClick }: NavMenuLinkProps) => {
  return (
    <NavLink className="flex items-center space-x-2 text-sm" to={route} onClick={handleClick}>
      {({ isActive }) => (
        <>
          <Icon />
          <span>{children}</span>
          {isActive && <ChevronLeftIcon />}
        </>
      )}
    </NavLink>
  );
};
