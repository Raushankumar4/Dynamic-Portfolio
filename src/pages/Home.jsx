import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div className=" w-full lg:h-[43vw] md:h-[30vw] h-[66vw] text-white bg-[#000000]  pt-1 rounded-bl-3xl rounded-br-3xl">
        <div className="textStructure mt-20 px-20">
          <div className="masker font-semibold">
            <motion.h1
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "easeInOut",
              }}
              className="hover:text-red-300 uppercase text-[9vw] leading-[7.4vw] tracking-tighter transition ease-in-out delay-150  hover:-translate-x-[4vw] hover:scale-110  w-[34vw]"
            >
              we are
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.5,
                duration: 1,
                ease: "easeInOut",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
              className="uppercase text-[9vw]  leading-[7.4vw] tracking-tighter hover:text-blue-500 transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110 w-[37vw] text-blue-500 cursor-pointer "
            >
              Modern
            </motion.h1>
          </div>

          <div className="masker font-semibold w-[45vw]">
            <motion.h1
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 2,
                duration: 1,
                ease: "easeInOut",
              }}
              className="uppercase text-[9vw]  leading-[7.4vw] tracking-tighter hover:text-yellow-200 transition ease-in-out delay-150  hover:-translate-x-[-5vw] hover:scale-110"
            >
              developer
            </motion.h1>
            <p className=" mt-[3vw] ml-[0.6vw] text-[1.3vw]  font-semi tracking-wider hover:text-blue-300 transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110 capitalize">
              ----😎
            </p>
          </div>
        </div>
        <div className="border-b-[1px] border-white mt-[5vw]"></div>
      </div>
    </>
  );
};

export default Home;
