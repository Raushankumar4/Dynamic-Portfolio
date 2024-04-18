import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const diffTosty = () => {};
  const [pending, setPending] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);

    emailjs
      .sendForm("service_fje4mbi", "template_gvv8fa4", form.current, {
        publicKey: "I0NvdMAzRueoiWvyH",
      })
      .then(
        () => {
          setPending(false);
          console.log("SUCCESS!");
          toast("message send successfully!", {
            position: "top-center",
          });

          form.current.reset(e);
        },
        (error) => {
          setPending(false);
          console.log("FAILED...", error.text);
          toast("message can't sent!", {
            position: "top-center",
          });
          form.current.reset(e);
        }
      );
  };
  return (
    <>
      <div className=" bg-gradient-to-r from-stone-500 to-stone-700 w-[100%] md:h-[210vh] sm:min-h-[100vh] h-[110vh] lg:h-[220vh] flex">
        <div className="form-container">
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="ml-[8vw] lg:mt-[14vw] md:mt-[16vw] sm:mt-[20vw] mt-[36vw] text-[7vw] text-white font-semi leading-[7.5vw]  whitespace-wrap "
          >
            Let's start a project together
          </h1>
          <form
            className="mt-[10vw] p
          ml-[6vw] mr-[6vw] relative"
            ref={form}
            onSubmit={sendEmail}
          >
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className=" border-t-[0.4px] border-gray-400 text-gray-200 font-semibold text-[2vw] leading-[5vw] mt-[2vw] tracking-tighter ml-[4vw] relative"
            >
              What's your name?
            </h1>
            <input
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="no-underline outline-none w-[18vw] ml-[4vw] h-[4vw] mb-[1.8vw] text-[2vw] text-gray-300 tracking-tighter font-semi bg-transparent"
              type="text"
              name="name"
              placeholder="Enter the name"
              required
            />

            <h1
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="border-t-[0.4px] border-gray-400 text-gray-200 font-semibold text-[2vw]  pt-[2.6vw] ml-[4vw] tracking-tighter "
            >
              What's your email?
            </h1>
            <input
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="no-underline relative outline-none w-[18vw] ml-[4vw] h-[4vw] mb-[1.8vw] text-[2vw] text-gray-300 tracking-tighter font-semi bg-[#1c1d2000]"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <br />
            <h1
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="border-t-[0.4px] border-gray-400 text-gray-200 font-semibold text-[2vw]  pt-[2.6vw] ml-[4vw] tracking-tighter"
            >
              What services are you looking for?
            </h1>
            <input
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="no-underline outline-none w-[24vw] ml-[4vw] h-[4vw] mb-[1.8vw] text-[2vw] text-gray-300 tracking-tighter font-semi bg-[#1c1d2000]"
              type="text"
              name="name"
              placeholder="web design,web development"
              name="message"
              required
            />
            <br />
            <h1
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="border-t-[0.4px] border-gray-400 text-gray-200 font-semibold text-[2vw]  pt-[2.6vw] ml-[4vw] tracking-tighter"
            >
              Write Your Message{" "}
            </h1>
            <textarea
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="no-underline outline-none relative w-[36vw] ml-[4vw] h-[18vw]  mb-[1.8vw] text-[2vw] text-gray-300 tracking-tighter font-semi bg-[#1c1d2000] border-b-[0.5px] border-gray-300"
              name=""
              id=""
              cols="20"
              rows="10"
              placeholder="Enetr your message"
              name="message"
              required
            ></textarea>
            <button
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="bg-gradient-to-r from-stone-500 to-stone-700 lg:w-[10vw] md:w-[10vw] sm:w-[10vw] lg:h-[10vw] md:h-[10vw] sm:h-[10vw] w-[20vw] h-[20vw] rounded-full absolute left-[60%] top-[88.4%] tracking-tighter text-white transition ease-in-out delay-150  hover:-translate-x-[4vw] hover:scale-110 hover:rotate-45 "
              type="submit"
              onClick={diffTosty}
              disabled={pending ? true : false}
            >
              {pending ? "Sending.." : "Send it!"}
            </button>
          </form>
        </div>
        <div className=" w-[30vw] h-[40vw] ml-[9.8vw] z-50 lg:mt-[19vw] md:mt-[22vw] sm:mt-[19vw] mt-[37vw]">
          <img
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="w-[8vw] h-[8vw] rounded-full  transition ease-in-out delay-150 hover:scale-110 hover:rotate-180"
            src="/profile.jpg"
            alt="not_found"
          />
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-white text-[3.5vw] block ml-[3.6vw]"
          >
            -
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-gray-400 tracking-tighter font-semibold text-[1.6vw] "
          >
            Contact Details
          </h2>
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-gray-200 font-medium text-[1.4vw] pr-[4vw] tracking-tight mt-[0.6vw]"
          >
            raushankumarguptag@gmail.com
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-gray-200 tracking-tighter font-medium text-[1.1vw] mt-[0.6vw]"
          >
            +91 9852185318
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-gray-200 tracking-tight font-medium text-[1.4vw] mt-[0.6vw]"
          >
            Location: New Delhi,India
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-gray-400 tracking-tighter font-semibold text-[1.6vw] mt-[3.5vw]"
          >
            Socials
          </h1>
          <a
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-white flex flex-col tracking-tight font-semibold text-[1.2vw]  transition ease-in-out delay-150  hover:text-gray-400 hover:text-[1.4vw] hover:underline "
            href="https://www.instagram.com/raushangupta4891"
          >
            Instagram
          </a>

          <a
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-white  flex flex-col tracking-tight font-semibold text-[1.2vw]  transition ease-in-out delay-150  hover:text-gray-400 hover:text-[1.4vw] hover:underline "
            href="https://twitter.com"
          >
            twitter
          </a>

          <a
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-white flex flex-col tracking-tight font-semibold text-[1.2vw] transition ease-in-out delay-150  hover:text-gray-400 hover:text-[1.4vw] hover:underline  "
            href="https://www.linkedin.com/in/raushan-kumar-b87787304"
          >
            LinkIn
          </a>

          <a
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-white flex flex-col tracking-tight font-semibold text-[1.2vw] transition ease-in-out delay-150  hover:text-gray-400 hover:text-[1.4vw] hover:underline  "
            href="https://www.facebook.com/rau.shan.1806"
          >
            Facebook
          </a>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
