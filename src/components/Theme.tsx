"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";
const ThemeSwitch = () => {
  const [theme, toogleTheme] = useState<Theme>();

  const ToogleSwitch = () => {
    theme === "light" ? toogleTheme("dark") : toogleTheme("light");
    console.log(theme);

    JSON.stringify(localStorage.setItem("theme", theme));
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      toogleTheme(localStorage.getItem("theme"));
    } else {
      toogleTheme("light");
      JSON.stringify(localStorage.setItem("theme", "light"));
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
