import { useState } from "react";
import { MoonIcon, SunIcon } from "../../assets/icons";

export const ColorModeSwitch = () => {
  const [mode, setMode] = useState(localStorage.getItem("theme"));

  const handleModeSwitch = () => {
    if (localStorage.theme === "light") {
      document.documentElement.classList.add("dark");
      setMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setMode("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {mode === "light" && (
        <button onClick={handleModeSwitch}>
          <SunIcon />
        </button>
      )}
      {mode === "dark" && (
        <button onClick={handleModeSwitch}>
          <MoonIcon />
        </button>
      )}
    </>
  );
};
