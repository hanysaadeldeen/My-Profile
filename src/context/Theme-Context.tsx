"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemecontextproviderType = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  ToogleSwitch: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({
  children,
}: ThemecontextproviderType) => {
  const [theme, toogleTheme] = useState<Theme>("light");

  const ToogleSwitch = () => {
    if (theme === "light") {
      toogleTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      toogleTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const ThemeLocal = localStorage.getItem("theme") as Theme | null;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      toogleTheme("light");
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
    if (ThemeLocal) {
      if (ThemeLocal === "dark") {
        document.documentElement.classList.add("dark");
      }
      toogleTheme(ThemeLocal);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
      toogleTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, ToogleSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
export default useTheme;
