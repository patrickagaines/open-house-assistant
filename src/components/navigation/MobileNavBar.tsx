import { ThemeModeSwitch } from "../buttons/ThemeModeSwitch";
import { NavLogo } from "./NavLogo";
import { NavMenuButton } from "./NavMenuButton";

interface MobileNavBarProps {
  navMenu: "closed" | "open";
  setNavMenu: React.Dispatch<React.SetStateAction<"closed" | "open">>;
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

// prettier-ignore
export const MobileNavBar = ({ navMenu, setNavMenu, theme, setTheme }: MobileNavBarProps) => {
  const handleNavMenu = () => {
    if (navMenu === "closed") {
      setNavMenu("open");
    } else {
      setNavMenu("closed");
    }
  };

  return (
    <>
      <div className="flex h-16 items-center justify-between px-4 lg:hidden">
        <NavLogo setNavMenu={setNavMenu} />
        <div className="flex space-x-4">
          <ThemeModeSwitch theme={theme} setTheme={setTheme} />
          <NavMenuButton onClick={handleNavMenu} />
        </div>
      </div>
    </>
  );
};
