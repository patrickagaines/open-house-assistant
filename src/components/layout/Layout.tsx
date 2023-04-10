import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MobileNavBar } from "../navigation/MobileNavBar";
import { NavBar } from "../navigation/NavBar";
import { NavMenu } from "../navigation/NavMenu";
import { NavMenuShade } from "../navigation/NavMenuShade";
import { Header } from "./Header";

export const Layout = () => {
  const initialTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      return "dark";
    } else {
      return "light";
    }
  };

  const [navMenu, setNavMenu] = useState<"closed" | "open">("closed");
  const [theme, setTheme] = useState<"dark" | "light">(initialTheme());

  return (
    <>
      <Header>
        <MobileNavBar navMenu={navMenu} setNavMenu={setNavMenu} theme={theme} setTheme={setTheme} />
        <NavBar theme={theme} setTheme={setTheme} />
      </Header>
      <NavMenu navMenu={navMenu} setNavMenu={setNavMenu} />
      {navMenu === "open" && <NavMenuShade />}
      <main className="mx-auto mt-16 max-w-screen-xl p-4 lg:mt-20">
        <Outlet />
      </main>
    </>
  );
};
