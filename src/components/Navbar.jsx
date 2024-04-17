import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <nav
        data-aos="zoom-in-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="uppercase flex lg:h-[2.3vw] md:h-[2.99vw] mix-blend-normal md:py-[0.4vw]  tracking-tight justify-between sm:px-[14vw] px-[12vw] sm:gap-[1vw] md:px-[10vw] w-full text-gray-100 bg-gradient-to-r from-neutral-600 to-[#95959500] md:text-[1.8vw] sm:text-[2vw] text-[2.80vw] lg:text-[1.4vw]  fixed z-[999]"
      >
        <h1 className="transition duration-300 ease-in-out hover:-scale-x-110 ">
          👀
        </h1>
        <div className="flex ">
          <ul className="flex gap-[2vw] sm:gap-[1vw] font-semibold cursor-pointer ">
            <li className="transition duration-300 ease-in-out hover:scale-x-110 ">
              <Link
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
            <li className="transition duration-300 ease-in-out hover:scale-x-110">
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
            <li className="transition duration-300 ease-in-out hover:scale-x-110">
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

            <li className="transition duration-300 ease-in-out hover:scale-x-110 hover:translate-x-2">
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
            <li className="transition duration-300 ease-in-out hover:scale-x-110 ">
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
      </nav>
    </>
  );
};

export default Navbar;
