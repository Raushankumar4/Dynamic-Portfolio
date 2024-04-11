import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
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
      <div className=" bg-[#1C1D20] w-[100%] h-[105vw] flex">
        <div className="form-container">
          <h1 className="ml-[8vw] mt-[10vw] text-[7vw] text-white font-semi leading-[7.5vw] tracking-tigh whitespace-wrap ">
            Let's start a project together
          </h1>
          <form
            className="mt-[10vw] p
          ml-[6vw] mr-[6vw] relative"
            ref={form}
            onSubmit={sendEmail}
          >
            <h1 className=" border-t-[0.4px] border-gray-400 text-gray-200 font-semibold text-[2vw] leading-[5vw] mt-[2vw] tracking-tighter ml-[4vw] relative">
              What's your name?
            </h1>
            <input
              className="no-underline outline-none w-[18vw] ml-[4vw] h-[4vw] mb-[1.8vw] text-[2vw] text-gray-300 tracking-tighter font-semi bg-[#1C1D20]"
              type="text"
              name="name"
              placeholder="Enter the name"
              required
            />
            <br />
            <h1 className="border-t-[0.4px] border-gray-400 text-gray-200 font-semibold text-[2vw]  pt-[2.6vw] ml-[4vw] tracking-tighter ">
              What's your email?
            </h1>
            <input
              className="no-underline relative outline-none w-[18vw] ml-[4vw] h-[4vw] mb-[1.8vw] text-[2vw] text-gray-300 tracking-tighter font-semi bg-[#1C1D20]"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <br />
            <h1 className="border-t-[0.4px] border-gray-400 text-gray-200 font-semibold text-[2vw]  pt-[2.6vw] ml-[4vw] tracking-tighter">
              What services are you looking for?
            </h1>
            <input
              className="no-underline outline-none w-[24vw] ml-[4vw] h-[4vw] mb-[1.8vw] text-[2vw] text-gray-300 tracking-tighter font-semi bg-[#1C1D20]"
              type="text"
              name="name"
              placeholder="web design,web development"
              name="message"
              required
            />
            <br />
            <h1 className="border-t-[0.4px] border-gray-400 text-gray-200 font-semibold text-[2vw]  pt-[2.6vw] ml-[4vw] tracking-tighter">
              Write Your Message{" "}
            </h1>
            <textarea
              className="no-underline outline-none relative w-[36vw] ml-[4vw] h-[18vw]  mb-[1.8vw] text-[2vw] text-gray-300 tracking-tighter font-semi bg-[#1C1D20] border-b-[0.5px] border-gray-300"
              name=""
              id=""
              cols="20"
              rows="10"
              placeholder="Enetr your message"
              name="message"
              required
            ></textarea>
            <button
              className="bg-[#334BD3] w-[10vw] h-[10vw] rounded-full absolute left-[60%] top-[88.4%] tracking-tighter text-white transition ease-in-out delay-150  hover:-translate-x-[4vw] hover:scale-110 hover:rotate-45"
              type="submit"
              onClick={diffTosty}
              disabled={pending ? true : false}
            >
              {pending ? "Sending.." : "Send it!"}
            </button>
          </form>
        </div>
        <div className=" w-[30vw] h-[40vw] ml-[9.8vw] z-50 mt-[19vw]">
          <img
            className="w-[8vw] h-[8vw] rounded-full  transition ease-in-out delay-150 hover:scale-110 hover:rotate-180"
            src="/profile.jpg"
            alt="not_found"
          />
          <h1 className="text-white text-[3.5vw] block ml-[3.6vw]">-</h1>
          <h2 className="text-gray-400 tracking-tighter font-semibold text-[1.6vw] ">
            Contact Details
          </h2>
          <h1 className="text-gray-200 tracking-tighter font-medium text-[1.3vw] mt-[0.6vw]">
            raushankumarguptag@gmail.com
          </h1>
          <h1 className="text-gray-200 tracking-tighter font-medium text-[1.1vw] mt-[0.6vw]">
            +91 9852185318
          </h1>
          <h1 className="text-gray-200 tracking-tight font-medium text-[1.4vw] mt-[0.6vw]">
            Location: New Delhi,India
          </h1>
          <h1 className="text-gray-400 tracking-tighter font-semibold text-[1.6vw] mt-[3.5vw]">
            Socials
          </h1>
          <a
            className="text-white tracking-tight font-semibold text-[1.2vw] mt-[4vw] transition ease-in-out delay-150  hover:text-gray-400 hover:text-[1.4vw] hover:underline "
            href=""
          >
            Instagram
          </a>
          <br />
          <a
            className="text-white tracking-tight font-semibold text-[1.2vw] mt-[4vw] transition ease-in-out delay-150  hover:text-gray-400 hover:text-[1.4vw] hover:underline "
            href=""
          >
            Twitter
          </a>
          <br />
          <a
            className="text-white tracking-tight font-semibold text-[1.2vw] mt-[4vw] transition ease-in-out delay-150  hover:text-gray-400 hover:text-[1.4vw] hover:underline "
            href=""
          >
            LinkIn
          </a>
          <br />
          <a
            className="text-white tracking-tight font-semibold text-[1.2vw] mt-[4vw] transition ease-in-out delay-150  hover:text-gray-400 hover:text-[1.4vw] hover:underline "
            href=""
          >
            facebook
          </a>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
