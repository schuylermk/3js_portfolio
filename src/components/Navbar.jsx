import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={`
      ${styles.paddingX} w-full flex py-5 items-center top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-beige text-[18px] font-bold cursor-pointer">
            Schuyler Klaassen
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
