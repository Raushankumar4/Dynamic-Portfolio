import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.4,
          duration: 1,
          ease: "easeInOut",
        }}
        className="uppercase flex h-[2vw] mix-blend-normal py-[0.2vw]  tracking-tight justify-between px-[10vw] w-full text-gray-100 bg-[#0F172A]   text-[1vw] "
      >
        <h1 className="transition duration-300 ease-in-out hover:-scale-x-110">
          👀{" "}
        </h1>
        <div className="flex ">
          <ul className="flex gap-[2vw] font-semibold cursor-pointer ">
            <li className="transition duration-300 ease-in-out hover:-scale-y-110">
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={1000}
              >
                Home
              </Link>
            </li>
            <li className="transition duration-300 ease-in-out hover:-scale-x-110">
              <Link
                activeClass="active"
                to="/about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={1000}
              >
                About
              </Link>
            </li>
            <li className="transition duration-300 ease-in-out hover:-scale-y-110">
              <Link
                activeClass="active"
                to="/skill"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={1000}
              >
                Skills
              </Link>
            </li>

            <li className="transition duration-300 ease-in-out hover:-scale-x-110 hover:translate-x-2">
              <Link
                activeClass="active"
                to="/service"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={1000}
              >
                Services
              </Link>
            </li>
            <li className="transition duration-300 ease-in-out hover:-scale-x-110 hover:translate-x-10">
              <Link
                activeClass="active"
                to="/contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
