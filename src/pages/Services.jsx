import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-tl from-stone-600 to-stone-100 w-full md:min-h-[100vh] sm:h-[100vh] lg:h-[120vh] min-h-[100vh] md:pb-[0vw] sm:pb-[0vw] pb-[10vw]   pt-[14vw] md:pt-[2vw] sm:pt-[2vw]  relative rounded-tl-0xl">
        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="text-[10vw] text-black flex justify-center items-center tracking-tight capitalize font-semibold md:pt-[6vw] sm:pt-[12vw] pt-[10vw]"
        >
          Services
        </h1>
        <p
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex font-semibold justify-center items-center tracking-tight text-black transition duration-300 ease-in-out hover:scale-x-75"
        >
          ⨠ Our Services
        </p>
        <div className="md:flex sm:flex w-full md:px-[0vw] sm:px-[0vw] px-[22.4vw]  md:justify-evenly sm:justify-evenly md:pt-[3vw] sm:pt-[3vw] pt-[10vw] ">
          <div
            data-aos="zoom-in-down"
            data-aos-offset="200"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="md:w-[24vw] sm:w-[28vw] md:h-[24vw] sm:h-[28vw] w-[56vw] h-[46vw] bg-gradient-to-r from-neutral-300 to-stone-400 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out hover:-scale-y-110 md:mb-[0vw] sm:mb-[0vw] mb-[8vw]"
          >
            <h1
              data-aos="zoom-in-down"
              data-aos-offset="100"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-[3vw] font-semibold tracking-wide md:pt-[5vw] sm:pt-[8vw] pt-[11vw] pl-[4vw]"
            >
              ↂ
            </h1>
            <p className="font-semibold md:text-[3vw] sm:text-[3vw] text-[6vw] text-black ml-[2vw] uppercase tracking-wide pl-[2vw] ">
              ⋈ Web
            </p>
            <p
              data-aos="zoom-in-down"
              data-aos-offset="100"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="font-bold  text-gray-600 pl-[4.3vw] uppercase tracking-wide"
            >
              DEVELOPMENT
            </p>
            <a
              className="font-medium text-gray-400  pl-[4.3vw]  pt-[4vw] tracking-tighter"
              href="https://studyhub.tech/"
            >
              Learn More ⇾
            </a>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-offset="200"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="md:w-[24vw] sm:w-[28vw] md:h-[24vw] sm:h-[28vw] w-[56vw] h-[46vw] bg-gradient-to-r from-neutral-300 to-stone-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out hover:-scale-y-110 md:mb-[0vw] sm:mb-[0vw] mb-[8vw]"
          >
            <h1
              data-aos="zoom-in-down"
              data-aos-offset="200"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-[3vw] font-semibold tracking-wide md:pt-[5vw] sm:pt-[8vw] pt-[11vw]  pl-[4vw] "
            >
              {" "}
              ⩸
            </h1>
            <p
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="font-semibold md:text-[3vw] sm:text-[3vw] text-[6vw] text-gray-800 ml-[2vw] uppercase tracking-tight pl-[2vw] "
            >
              ⋈ backend
            </p>
            <p
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="font-bold  text-gray-600 pl-[4.3vw] uppercase tracking-wide"
            >
              DEVELOPMENT
            </p>
            <a
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="font-medium text-gray-400  pl-[4.3vw]  pt-[4vw] tracking-tighter"
              href="https://studyhub.tech/"
            >
              Learn More ⇾
            </a>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="md:w-[24vw] sm:w-[28vw] md:h-[24vw] sm:h-[28vw] w-[56vw] h-[46vw]  bg-gradient-to-r from-neutral-300 to-stone-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out hover:-scale-y-110  "
          >
            <h1
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-[3vw] font-semibold tracking-wide  md:pt-[5vw] sm:pt-[8vw] pt-[11vw] pl-[4vw]"
            >
              {" "}
              ⩤⩥
            </h1>
            <p
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="font-semibold md:text-[3vw] sm:text-[3vw] text-[6vw] text-gray-800 ml-[2vw] uppercase tracking-tight pl-[2vw] "
            >
              ⋈ ui/ux
            </p>
            <p
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="font-bold  text-gray-600 pl-[4.3vw] uppercase tracking-wide"
            >
              DEVELOPMENT
            </p>
            <a
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="font-medium text-gray-400  pl-[4.3vw]  pt-[4vw] tracking-tighter"
              href="https://studyhub.tech/"
            >
              Learn More ⇾
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
