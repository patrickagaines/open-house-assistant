import { useAuth0 } from "@auth0/auth0-react";
import { ColorModeSwitch } from "../buttons/ColorModeSwitch";
import { LoginButton } from "../buttons/LoginButton";
import { LogoutButton } from "../buttons/LogoutButton";
import { SignupButton } from "../buttons/SignupButton";
import { NavBarLink } from "./NavBarLink";
import { NavLogo } from "./NavLogo";

interface NavBarProps {
  colorMode: string | null;
  setColorMode: React.Dispatch<React.SetStateAction<string | null>>;
}

export const NavBar = ({ colorMode, setColorMode }: NavBarProps) => {
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
        <ColorModeSwitch colorMode={colorMode} setColorMode={setColorMode} />
      </div>
    </nav>
  );
};
