import React from "react";
import { useFormStatus } from "react-dom";
import { IoIosSend } from "react-icons/io";

const BtnContact = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="group   dark:bg-white dark:bg-opacity-80 dark:hover:bg-opacity-100 dark:active:bg-opacity-100  dark:text-gray-950
        hover:scale-105 transition-all
        flex items-center justify-center gap-3 rounded-full w-[8rem] py-3 px-6 text-white mt-3 max-sm:w-full bg-gray-950"
    >
      {!pending && (
        <>
          Submit{" "}
          <IoIosSend className=" group-hover:-translate-y-1 transition-all text-xl opacity-80" />
        </>
      )}
      {pending && (
        <div className=" w-5 h-5 animate-spin border-b-4  border-white rounded-full"></div>
      )}
    </button>
  );
};

export default BtnContact;
