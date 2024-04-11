import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full sm:h-[80vh] min-h-[100vh] bg-[#a6ab8fd2] relative rounded-tl-3xl">
        <div className=" flex relative whitespace-wrap">
          <h1 className="uppercase mt-[12vw] w-[54vw] ml-[10vw] text-[3vw] font-semibold leading-[3vw] text-[#404040] object-cover hover:underline transition ease-in-out delay-150">
            <span className="text-[5vw] font-semibold leading-1 tracking-tight ">
              Hello! I'm Raushan Kumar
            </span>
            -- Modern web Developer.👀 Helping brands to stand out in the
            digital era. Together we will set the new status quo. No nonsense,
            always on the cutting edge.
          </h1>
          <h1 className="mt-[10vw] font-normal tracking-wide text-[1.5vw] w-[18vw] ml-[8vw] flex-col whitespace-wrap mb-[19vw]">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </h1>
          <button className="absolute right-[12%] bottom-[5%] bg-[#455CE9] text-white w-[13vw] h-[13vw] rounded-full font-semi uppercase     hover:bg-gradient-to-r from-transparent to-[#1C1D20] hover:-translate-x-[4vw] hover:scale-110 hover:rotate-45 hover:text-[1vw] transition ease-in-out delay-150 text-[1.4vw]">
            About Me
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
