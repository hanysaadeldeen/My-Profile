import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { ActiveSectionfunc } from "@/context/ActiveSectionContextProvider";
import type { sectionName } from "@/lib/type";

export const useSectionInView = (value: number, section: sectionName) => {
  const { ref, inView } = useInView({
    threshold: value,
  });

  const { secActiveSection, timeOfLastClick } = ActiveSectionfunc();
  useEffect(() => {
    if (inView === true && inView && Date.now() - timeOfLastClick > 1000) {
      secActiveSection(section);
    }
  }, [inView, timeOfLastClick, secActiveSection, section]);

  return ref;
};
