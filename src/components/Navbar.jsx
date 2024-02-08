import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../../images";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} top-0 z-20 flex w-full items-center bg-primary py-5
    `}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/#Contact"
          className="flex items-center gap-10"
          onClick={() => {
            window.location.href = "#Contact";
          }}
        >
          <motion.div
            whileHover={{
              rotate: 383,
              transition: { duration: 0.75, ease: [1, 0, 0, 1] },
            }}
          >
            <img src={logo} alt="logo" className="duration-250 h-32 w-32" />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3334 },
            }}
          >
            <p className="transition-duration:700ms -ml-4 cursor-pointer font-bold text-[#6A7AA0] transition delay-500 ease-in-out hover:text-beige sm:m-0 sm:text-[18px]">
              Schuyler Klaassen
            </p>
          </motion.div>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white
              `}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile nav menu */}

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient mx04 absolute right-0 top-20 z-10 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins cursor-pointer text-[16px] font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    console.log("Active item:", link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
