import { MoonIcon, SunIcon } from "../../assets/icons";

interface ColorModeSwitchProps {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

export const ThemeModeSwitch = ({ theme, setTheme }: ColorModeSwitchProps) => {
  const handleModeSwitch = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {theme === "light" && (
        <button type="button" aria-label="Switch Color Themes" onClick={handleModeSwitch}>
          <SunIcon />
        </button>
      )}
      {theme === "dark" && (
        <button type="button" aria-label="Switch Color Themes" onClick={handleModeSwitch}>
          <MoonIcon />
        </button>
      )}
    </>
  );
};
