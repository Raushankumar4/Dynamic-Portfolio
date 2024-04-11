import { motion } from "framer-motion";
import React from "react";

const Services = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex justify-center items-center text-[10vw] font-semibold tracking-tighter"
      >
        Services
      </motion.h1>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ opacity: 1, x: 100, rotate: 180 }}
        transition={{
          delay: 0.4,
          duration: 1.8,
          ease: "easeInOut",
        }}
        className="flex gap-10 justify-center items-center w-[80%] h-screen"
      >
        <div className="bg-red-400 w-[20vw] h-[15vw]">service 1</div>
        <div className="bg-red-400 w-[20vw] h-[15vw]">service 2</div>
      </motion.div>
    </>
  );
};

export default Services;
