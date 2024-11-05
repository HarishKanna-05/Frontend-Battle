import React from "react";

const Header = () => (
  <header className="flex justify-between items-center p-4">
    <div className="flex items-center">
      <img
        className="w-[50px] h-[50px]  rounded-full mr-4"
        src="https://devsrec.club/assets/devs-white.png"
      />
    </div>
    <nav className="hidden md:flex space-x-6  ">
      <a
        href="#"
        className="text-white hover:text-orange-500 transition-colors"
      >
        Home
      </a>
      <a
        href="#"
        className="text-white hover:text-orange-500 transition-colors"
      >
        Events
      </a>
      <a
        href="#"
        className="text-white hover:text-orange-500 transition-colors"
      >
        Members
      </a>
      <a
        href="#"
        className="text-white hover:text-orange-500 transition-colors"
      >
        Contact
      </a>
    </nav>
    <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
      Login
    </button>
  </header>
);
export default Header;
