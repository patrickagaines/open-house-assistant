import { ColorModeSwitch } from "../buttons/ColorModeSwitch";
import { NavLogo } from "./NavLogo";
import { NavMenuButton } from "./NavMenuButton";

interface MobileNavBarProps {
  navMenu: "closed" | "open";
  setNavMenu: React.Dispatch<React.SetStateAction<"closed" | "open">>;
  colorMode: string | null;
  setColorMode: React.Dispatch<React.SetStateAction<string | null>>;
}

export const MobileNavBar = ({
  navMenu,
  setNavMenu,
  colorMode,
  setColorMode,
}: MobileNavBarProps) => {
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
          <ColorModeSwitch colorMode={colorMode} setColorMode={setColorMode} />
          <NavMenuButton onClick={handleNavMenu} />
        </div>
      </div>
    </>
  );
};
