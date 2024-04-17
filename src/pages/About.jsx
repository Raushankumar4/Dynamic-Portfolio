import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        // data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="bg-gradient-to-tl from-stone-600 to-stone-100 w-full sm:h-[100vh] lg:h-[120vh] h-[140vh] pt-[24vw] sm:pt-[6vw] lg:pt-[0vw] relative rounded-tl-0xl"
      >
        <div
          data-aos="fade-down"
          // data-aos-offset="300"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className=" md:flex  sm:flex relative "
        >
          <h1
            data-aos="fade-down"
            // data-aos-offset="300"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="uppercase md:mt-[18vw] sm:mt-[21vw] w-[54vw] ml-[10vw] md:text-[3vw] sm:text-[3vw] text-[4vw] font-semibold md:leading-[3vw] sm:leading-[3vw]  text-[#404040] object-cover hover:underline transition ease-in-out delay-150 mt-[8vw] leading-[4.3vw]"
          >
            <span className="text-[5vw] font-semibold leading-1 tracking-tight ">
              Hello! I'm Raushan Kumar
            </span>
            -- Modern web Developer.👀 Helping brands to stand out in the
            digital era. Together we will set the new status quo. No nonsense,
            always on the cutting edge.
          </h1>
          <h1 className="md:mt-[17vw] sm:mt-[20vw] font-normal tracking-wide md:text-[1.4vw] w-[18vw] md:ml-[8vw] sm:ml-[8vw] flex-col whitespace-wrap md:mb-[20vw] sm:mb-[27vw] sm:text-[2vw] md:leading-none sm:leading-4 whitespace-wrap mt-[10vw] text-[2.4vw] ml-[12vw] ">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </h1>
          <div className="">
            <button
              data-aos="fade-left"
              // data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="absolute right-[12%] bottom-[5%] bg-gradient-to-r from-neutral-800 to-slate-400 text-white md:w-[13vw]  md:h-[13vw] sm:w-[13vw]   sm:h-[13vw] rounded-full font-semi uppercase hover:scale-110 hover:rotate-45 md:hover:text-[1vw] sm:hover:text-[1vw] hover:text-[2.8vw] transition ease-in-out delay-150 md:text-[1.2vw] sm:text-[1.4vw] h-[24vw] w-[24vw] text-[2.4vw]"
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
