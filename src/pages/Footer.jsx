import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-50 bg-[#d2dddd84] w-full h-screen ">
          <h1 className="text-[9vw] font-bold tracking-tighter   text-[#0F172A] absolute pl-[4vw] bottom-[54%]">
            Hi, I'm
          </h1>
          <p className="absolute bottom-[38%] text-[9vw] font-bold tracking-tighter  pl-[4vw] text-[#0F172A]">
            Raushan.
          </p>
          <p className="absolute bottom-[33%] text-[4vw] font-bold tracking-tighter  pl-[4.4vw] text-[#0F172A]">
            I'm a Front-end <span className="text-[#5E61E5]">Developer.</span>
          </p>
          <p className="absolute bottom-[23%] text-[1.6vw] font-smi tracking-tight pl-[4.4vw] text-[#0F172A] leading-6 mb-6">
            I'm a Modern Web Developer based in India, <br />
            <span className="leading-[-2vw] text-blue-800">
              {" "}
              and i am very passionate and{" "}
              <span className="text-gray-500 font-bold">
                {" "}
                dedicated to my work.
              </span>
            </span>
          </p>
          <a
            className="ml-[4.6vw] mt-[4vw] absolute bottom-[17%] px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            href="contact"
          >
            Hire me..
          </a>
        </div>
        <div className="w-full lg:h-[100vh] sm:h-[44vh] bg-[#E2E8F0] -z-0 overflow-hidden m-auto  ">
          <Marquee
            className="text-[14vw]  text-[#CBD5E1] uppercase tracking-tighter mb-[-9vw] leading-[0vw]"
            speed={40}
            autoFill
            direction="left"
          >
            Wlcome to my official portfolio
          </Marquee>

          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter mb-[-10.6vw]"
            speed={40}
            autoFill
            direction="left"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter mb-[-10.6vw]"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter mb-[-10.6vw] "
            speed={40}
            autoFill
            direction="left"
          >
            Wlcome to my official portfolio
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter mb-[-10.6vw] "
            speed={40}
            autoFill
            direction="right"
          >
            code play eat
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter "
            speed={40}
            autoFill
            direction="left"
          >
            Wlcome to my official portfolio
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Footer;
