import { useAuth0 } from "@auth0/auth0-react";
import { DashboardIcon, GuestsIcon, PropertiesIcon } from "../../assets/icons";
import { LoginButton } from "../buttons/LoginButton";
import { LogoutButton } from "../buttons/LogoutButton";
import { SignupButton } from "../buttons/SignupButton";
import { NavMenuLink } from "./NavMenuLink";

interface NavMenuProps {
  navMenu: "closed" | "open";
  setNavMenu: React.Dispatch<React.SetStateAction<"closed" | "open">>;
}

export const NavMenu = ({ navMenu, setNavMenu }: NavMenuProps) => {
  const { isAuthenticated } = useAuth0();

  const handleCloseNavMenu = () => {
    setNavMenu("closed");
  };

  return (
    <div
      className={`fixed -right-72 top-16 z-20 h-full w-72 border-l border-lt-border bg-lt-surface transition-transform duration-300 ease-in dark:border-dk-border dark:bg-dk-surface lg:hidden ${
        navMenu === "open" && "-translate-x-72"
      }`}
    >
      <nav className="flex flex-col space-y-4 p-4">
        <NavMenuLink handleClick={handleCloseNavMenu} Icon={DashboardIcon} route="/dashboard">
          Dashboard
        </NavMenuLink>
        <NavMenuLink handleClick={handleCloseNavMenu} Icon={PropertiesIcon} route="/properties">
          Properties
        </NavMenuLink>
        <NavMenuLink handleClick={handleCloseNavMenu} Icon={GuestsIcon} route="/guests">
          Guests
        </NavMenuLink>
        <hr className="border-lt-border dark:border-dk-border" />
        <div className="mx-auto flex space-x-4">
          {!isAuthenticated && (
            <>
              <SignupButton />
              <LoginButton />
            </>
          )}
          {isAuthenticated && <LogoutButton />}
        </div>
      </nav>
    </div>
  );
};
