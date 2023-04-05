import { MoonIcon, SunIcon } from "../../assets/icons";

interface ColorModeSwitchProps {
  colorMode: string | null;
  setColorMode: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ColorModeSwitch = ({ colorMode, setColorMode }: ColorModeSwitchProps) => {
  const handleModeSwitch = () => {
    if (colorMode === "light") {
      document.documentElement.classList.add("dark");
      setColorMode("dark");
      localStorage.setItem("theme", "dark");
    } else if (colorMode === "dark") {
      document.documentElement.classList.remove("dark");
      setColorMode("light");
      localStorage.setItem("theme", "light");
    } else if (colorMode === null) {
      document.documentElement.classList.add("dark");
      setColorMode("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      {colorMode === "light" && (
        <button type="button" aria-label="Color Mode Switch" onClick={handleModeSwitch}>
          <SunIcon />
        </button>
      )}
      {colorMode === "dark" && (
        <button type="button" aria-label="Color Mode Switch" onClick={handleModeSwitch}>
          <MoonIcon />
        </button>
      )}
    </>
  );
};
