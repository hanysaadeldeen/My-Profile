"use client";
import React from "react";
import { motion } from "framer-motion";

function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200, scale: 0 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.3,
        duration: 0.7,
      }}
      className="h-16 w-1 bg-gray-300  dark:bg-opacity-35 max-sm:hidden my-20 rounded-full "
    ></motion.div>
  );
}

export default Divider;
