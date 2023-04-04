import { NavLink } from "react-router-dom";

interface NavBarLinkProps {
  children: React.ReactNode;
  route: string;
}

export const NavBarLink = ({ children, route }: NavBarLinkProps) => {
  return <NavLink to={route}>{children}</NavLink>;
};
