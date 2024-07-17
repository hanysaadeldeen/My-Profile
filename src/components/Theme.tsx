"use client";
import useTheme from "@/context/Theme-Context";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, ToogleSwitch } = useTheme();

  return (
    <div
      className="fixed bottom-20 right-10 cursor-pointer border dark:border-white/30 dark:bg-gray-950 dark:bg-opacity-60  bg-white bg-opacity-80 
    hover:scale-110 active:scale-110 transition-all
    p-4 text-lg sm:text-2xl text-center sm:p-4 rounded-full shadow-lg "
      onClick={ToogleSwitch}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </div>
  );
};

export default ThemeSwitch;
