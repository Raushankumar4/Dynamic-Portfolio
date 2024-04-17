import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-neutral-400 to-slate-200  md:pt-[4vw]  sm:pt-[4vw] md:h-[150vh] sm:h-[140vh] h-[174vh] pt-[17vw]">
        <h1
          data-aos="fade-right"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="text-[10vw] text-gray-9 flex justify-center items-center tracking-tight capitalize font-semibold"
        >
          Skills
        </h1>
        <p
          data-aos="zoom-in-down"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex font-semibold justify-center items-center tracking-tight text-gray-500 transition duration-300 ease-in-out hover:scale-x-110"
        >
          ⨠ My Technical Level
        </p>
        <div className="md:flex sm:flex w-full  md:h-[60vw] h-[80vw] md:gap-[2.6vw] sm:gap-[1.6vw] md:px-[6vw] sm:px-[4vw] md:mt-[-10vw] px-[16vw] sm:mt-[-12vw] pt-[6vw] justify-center items-center">
          <div
            // data-aos="zoom-out-up"
            // data-aos-offset="200"
            // data-aos-delay="200"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            className=" sm:w-[44vw] md:h-[36vw] md:w-[48vw] sm:h-[44vw] w-[66vw] h-[64vw]  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]  transition duration-300 ease-in-out   "
          >
            <h1
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="flex justify-center items-center md:text-[2.2vw] sm:text-[2.2vw] text-[3.4vw] tracking-tight font-medium md:pt-[2vw] sm:pt-[2vw] pt-[3vw] leading-[4vw]"
            >
              ⩥ Frontend Developer ⩤
            </h1>

            <div className="skil  flex justify-evenly">
              <div
                data-aos="fade-down"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="200"
                data-aos-duration="00"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className="md:w-[10vw] sm:w-[10vw] w-[24vw] "
              >
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw] text-[3.3vw]  font-semibold tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[2vw] md:ml-[0vw] sm:ml-[0vw] ml-[4vw]">
                  ⨷ HTML
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[8.50vw] md:mt-[0vw] sm:mt-[0vw] mt-[0.56vw] ">
                  Basic
                </p>
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw] text-[3.3vw]  font-semibold tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[0.56vw] md:ml-[0vw] sm:ml-[0vw] ml-[4vw]">
                  ⨷ CSS
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[8.50vw] md:mt-[0vw] sm:mt-[0vw] mt-[0.56vw] ">
                  Basic
                </p>
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw] text-[3.3vw]  font-semibold tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[2vw] md:ml-[0vw] sm:ml-[0vw] ml-[4vw]">
                  ⨷ JS
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[8.50vw] md:mt-[0vw] sm:mt-[0vw] mt-[0.56vw] ">
                  Advance
                </p>
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw] text-[3.3vw]  font-semibold tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[2vw] md:ml-[0vw] sm:ml-[0vw] ml-[4vw]">
                  ⨷ React
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[8.50vw] md:mt-[0vw] sm:mt-[0vw] mt-[0.56vw] ">
                  Basic
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="300"
                data-aos-duration="1000"
                className=" md:w-[13vw] sm:w-[13vw] w-[33vw]"
              >
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw] text-[3.3vw]  font-semibold tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[2vw] md:ml-[0vw] sm:ml-[0vw] ml-[4vw]">
                  ⨷ Tailwand
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[8.50vw] md:mt-[0vw] sm:mt-[0vw] mt-[0.56vw] ">
                  Basic
                </p>
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw] text-[3.3vw]  font-semibold tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[0.56vw] md:ml-[0vw] sm:ml-[0vw] ml-[4vw]">
                  {" "}
                  ⨷ Bootstrap{" "}
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[8.50vw] md:mt-[0vw] sm:mt-[0vw] mt-[0.56vw] ">
                  Basic
                </p>
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw] text-[3.3vw]  font-semibold tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[1.44vw] md:ml-[0vw] sm:ml-[0vw] ml-[4vw]">
                  {" "}
                  ⨷ C{" "}
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[8.50vw] md:mt-[0vw] sm:mt-[0vw] mt-[0.56vw] ">
                  Basic
                </p>
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw] text-[3.3vw]  font-semibold tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[2vw] md:ml-[0vw] sm:ml-[0vw] ml-[4vw]">
                  {" "}
                  ⨷ C++{" "}
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[8.50vw] md:mt-[0vw] sm:mt-[0vw] mt-[0.56vw] ">
                  Basic
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-[44vw] md:h-[36vw] md:w-[48vw] sm:h-[44vw] w-[66vw] h-[64vw]  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]  transition duration-300 ease-in-out md:mt-[0vw]  sm:mt-[0vw] mt-[14vw] ">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="flex justify-center items-center md:text-[2.2vw] sm:text-[2.2vw] text-[3.4vw]  tracking-tight font-medium md:pt-[2vw] sm:pt-[2vw] pt-[6vw] leading-[4vw] "
            >
              ⩥ Backend Developer ⩤
            </h1>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="200"
              data-aos-duration="00"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="skil  flex justify-around "
            >
              <div className="md:w-[13vw] sm:w-[13vw] w-[40vw] justify-center items-center md:pl-[0vw] sm:pl-[0vw] pl-[6vw]">
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw]  text-[3.3vw] font-semibold md:tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[2vw]">
                  ⨷ Node Js
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[4.2vw]">
                  Basic
                </p>
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw]  text-[3.3vw] font-semibold md:tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[1vw]">
                  ⨷ Express Js
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[4.2vw]">
                  Basic
                </p>
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw]  text-[3.3vw] font-semibold md:tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[1vw]">
                  {" "}
                  ⨷ Mongo DB
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[4.2vw]">
                  Basic
                </p>{" "}
                <h1 className="md:text-[1.6vw] sm:text-[1.6vw]  text-[3.3vw] font-semibold md:tracking-wide md:mt-[2vw] sm:mt-[2vw] mt-[1vw]">
                  {" "}
                  ⨷ Next Js
                </h1>
                <p className="font-semibold tracking-normal text-gray-600 md:ml-[2.2vw] sm:ml-[2.2vw] ml-[4.2vw]">
                  Basic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
