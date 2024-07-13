"use client";

import { createContext, useContext, useState } from "react";

import type { sectionName } from "@/lib/type";

type ActiveSectionContextType = {
  activeSection: sectionName;
  secActiveSection: React.Dispatch<React.SetStateAction<sectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

type childrenType = {
  children: React.ReactNode;
};

function ActiveSectionContextProvider({ children }: childrenType) {
  const [activeSection, secActiveSection] = useState<sectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        secActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
export const ActiveSectionfunc = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "some Thing went wrong when use context in ActiveSectionContext"
    );
  }
  return context;
};

export default ActiveSectionContextProvider;
