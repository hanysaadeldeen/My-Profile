"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";
const ThemeSwitch = () => {
  const [theme, toogleTheme] = useState<Theme>();

  const ToogleSwitch = () => {
    if (theme === "light") {
      toogleTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      toogleTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const ThemeLocal = localStorage.getItem("theme") as Theme | null;
    if (ThemeLocal) {
      toogleTheme(ThemeLocal);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      toogleTheme("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);
  return (
    <div
      className="fixed bottom-20 right-10 cursor-pointer bg-white bg-opacity-85  
    hover:scale-110 active:scale-110 transition-all
    p-4 text-lg sm:text-2xl text-center sm:p-4 rounded-full shadow-lg "
      onClick={ToogleSwitch}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default ThemeSwitch;
