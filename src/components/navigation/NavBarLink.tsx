import { NavLink } from "react-router-dom";

interface NavBarLinkProps {
  children: React.ReactNode;
  route: string;
}

export const NavBarLink = ({ children, route }: NavBarLinkProps) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `hover:text-lt-primary dark:hover:text-dk-text ${
          isActive && "underline decoration-2 underline-offset-8"
        }`
      }
    >
      {children}
    </NavLink>
  );
};
