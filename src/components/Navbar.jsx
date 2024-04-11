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
        className="uppercase flex h-[4.6vw] py-[1.4vw] justify-between px-[10vw] w-full text-[white] bg-[#000000]  text-[1.2vw] tracking-wide"
      >
        <h1 className="font-semibold"> Code Hub👀</h1>
        <div className="flex ">
          <ul className="flex gap-[2vw] font-semibold cursor-pointer">
            <li>
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
            <li>
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
            <li>
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
                SKills
              </Link>
            </li>

            <li>
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
            <li>
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
