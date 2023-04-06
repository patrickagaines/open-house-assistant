import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../buttons/LoginButton";
import { LogoutButton } from "../buttons/LogoutButton";
import { SignupButton } from "../buttons/SignupButton";
import { ThemeModeSwitch } from "../buttons/ThemeModeSwitch";
import { NavBarLink } from "./NavBarLink";
import { NavLogo } from "./NavLogo";

interface NavBarProps {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

export const NavBar = ({ theme, setTheme }: NavBarProps) => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="mx-auto hidden h-20 max-w-screen-xl items-center justify-between px-4 lg:flex">
      <NavLogo />
      <div className="flex items-center space-x-4">
        <NavBarLink route="/dashboard">Dashboard</NavBarLink>
        <NavBarLink route="/properties">Properties</NavBarLink>
        <NavBarLink route="/guests">Guests</NavBarLink>
        {!isAuthenticated && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        {isAuthenticated && <LogoutButton />}
        <ThemeModeSwitch theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
};
