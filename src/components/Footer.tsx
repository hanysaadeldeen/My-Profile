import React from "react";

const Footer = () => {
  return (
    <footer className="mb-16 px-4 dark:text-gray-300 text-center font-bold text-gray-500">
      <small className="mb-2 block ">
        &copy; 2030 Hany Mohamed. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
