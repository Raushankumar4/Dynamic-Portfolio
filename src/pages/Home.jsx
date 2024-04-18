import React from "react";

// import Marque from "./Marque";
// import About from "./About";
// import Skills from "./Skills";
// import Services from "./Services";

// import Footer from "./Footer";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Contact from "./Contact";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="relative w-[100%] md:w-[99.99%] h-[100vh] m-auto p-auto box-border sm:h-[40vh] "
      >
        {/* <a
          className="fixed top-[80%] z-[999] text-[4vw] left-[80%]"
          href="navbar"
        >
          😊
        </a> */}
        <div className=" overflow-hidden absolute z-50 bg-[#7d84845b] w-full h-[100vh] md:h-[102.8vh] sm:h-[100vh] ">
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="md:text-[9vw] lg:text-[9vw]  tracking-tighter   bg-gradient-to-bl from-gray-100 via-gray-900 to-gray-900 bg-clip-text text-transparent absolute pl-[4vw] lg:bottom-[58%] sm:bottom-[59.5%] bottom-[57.99%] md:bottom-[54.66%] text-[12vw] sm:text-[10vw] md:leading-[14vw] sm:leading-[15vw] leading-[22.4vw] lg:font-bold md:font-bold sm:font-bold font-extrabold"
          >
            Hi, I'm
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="absolute md:bottom-[43%] sm:bottom-[49%] lg:bottom-[44.4%]  md:text-[9vw]  tracking-tight bottom-[52.33%] pl-[4vw] bg-gradient-to-r from-zinc-900 via-slate-900 to-gray-700 bg-clip-text text-transparent text-[13vw] sm:text-[10vw] lg:font-bold md:font-bold sm:font-bold font-extrabold"
          >
            Raushan.
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="absolute sm:bottom-[43.4%] md:bottom-[39%]  lg:bottom-[40%]  md:text-[4vw] font-bold tracking-tighter bottom-[49%]   pl-[4.4vw] bg-gradient-to-bl from-stone-900 via-blue-700 to-neutral-900 bg-clip-text text-transparent text-[6.8vw]"
          >
            I'm a Front-end Developer.
          </p>
          <p
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="absolute sm:bottom-[35.5%] sm:tracking-tighter sm:text-[3vw]  md:bottom-[30.6%] lg:bottom-[32%] bottom-[42%]  md:text-[1.4rem]  pl-[4.4vw]  mb-6 bg-gradient-to-br from-black via-gray-600 to-zinc-900 bg-clip-text text-transparent text-[5vw] font-semibold lg:tracking-tighter  tracking-tighter leading-7 lg:leading-none md:leading-none sm:leading-none "
          >
            I'm a Modern Web Developer based in India,
          </p>
          <p className="absolute sm:bottom-[31%] sm:tracking-tighter sm:text-[3vw]  md:bottom-[26.6%] lg:bottom-[27.89%] lg:tracking-tighter bottom-[39%]  md:text-[1.4rem] tracking-tighter pl-[4.4vw]  mb-6 bg-gradient-to-br from-black via-blue-600 to-zinc-900 bg-clip-text text-transparent text-[5.1vw] font-semibold leading-5 lg:leading-none md:leading-none sm:leading-none">
            and very passionate & dedicated to my work.
          </p>
          <a
            className="ml-[4.6vw] mt-[4vw] absolute bottom-[28%] px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]  lg:bottom-[20%] md:bottom-[16%] sm:bottom-[20%]  "
            href="mailto:raushankumarguptag@gmail.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email"
          >
            Join Us
          </a>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="w-full lg:h-[90vh] md:min-h-[103vh] sm:h-[100vh] bg-[#E2E8F0] -z-0 overflow-hidden  h-[100vh]  "
        >
          <Marquee
            className="text-[14vw]  text-[#CBD5E1] uppercase tracking-tighter mb-[-9vw] leading-[0vw]"
            speed={40}
            autoFill
            direction="left"
          >
            Wlcome to my official portfolio
          </Marquee>

          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter mb-[-10.6vw] overflow-hidden"
            speed={40}
            autoFill
            direction="left"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter mb-[-10.6vw] overflow-hidden"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter mb-[-10.6vw] overflow-hidden"
            speed={40}
            autoFill
            direction="left"
          >
            Wlcome to my official portfolio
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter mb-[-10.6vw]  overflow-hidden"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter mb-[-5.6vw]  overflow-hidden "
            speed={40}
            autoFill
            direction="left"
          >
            Wlcome to my official portfolio
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter  leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="left"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat code
          </Marquee>
          <Marquee
            className=" text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="left"
          >
            code play eat code
          </Marquee>
          <Marquee
            className=" text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat code
          </Marquee>
          <Marquee
            className=" text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="left"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat code
          </Marquee>
          <Marquee
            className=" text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="left"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="left"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="right"
          >
            code play eat code
          </Marquee>
          <Marquee
            className="text-[14vw] font-bold text-[#CBD5E1] uppercase tracking-tighter leading-[12vw] overflow-hidden"
            speed={40}
            autoFill
            direction="left"
          >
            code play eat code
          </Marquee>
        </div>
      </div>
      {/* 
      <Marque /> */}
      {/* <About />
      <Skills />
      <Services />
     
      <Footer /> */}
    </>
  );
};

export default Home;
