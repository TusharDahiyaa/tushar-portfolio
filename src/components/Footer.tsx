import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-neutral-950 my-10">
      <div className="max-w-2xl mx-auto text-justify-start text-base leading-6 font-medium dark:text-gray-400 light:text-gray-800">
        <p className="max-w-2xl mx-auto text-center">
          Tushar Dahiya © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
