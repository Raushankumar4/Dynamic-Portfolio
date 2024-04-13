import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-gray-400 w-full h-[100vh]">
        <h1 className="text-[10vw] text-white flex justify-center items-center tracking-tight capitalize font-semibold">
          Services
        </h1>
        <p className="flex font-semibold justify-center items-center tracking-tight text-gray-100 transition duration-300 ease-in-out hover:scale-x-75">
          ⨠ Our Services
        </p>
        <div className="flex w-full  justify-evenly mt-[2vw]">
          <div className="w-[24vw] h-[24vw]   bg-gradient-to-t from-gray-50 to-slate-50 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out hover:-scale-y-110">
            <h1 className="text-[3vw] font-semibold tracking-wide pt-[8vw] pl-[4vw]">
              {" "}
              ↂ
            </h1>
            <p className="font-semibold text-[3vw] text-black ml-[2vw] uppercase tracking-wide pl-[2vw] ">
              ⋈ Web
            </p>
            <p className="font-bold  text-gray-600 pl-[4.3vw] uppercase tracking-wide">
              DEVELOPMENT
            </p>
            <a
              className="font-medium text-gray-400  pl-[4.3vw]  pt-[4vw] tracking-tighter"
              href=""
            >
              Learn More ⇾
            </a>
          </div>
          <div className="w-[24vw] h-[24vw]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-t from-gray-50 to-slate-50 transition duration-300 ease-in-out hover:-scale-x-110">
            <h1 className="text-[3vw] font-semibold tracking-wide pt-[8vw] pl-[4vw]">
              {" "}
              ⩸
            </h1>
            <p className="font-semibold text-[3vw] text-gray-800 ml-[2vw] uppercase tracking-tight pl-[2vw] ">
              ⋈ backend
            </p>
            <p className="font-bold  text-gray-600 pl-[4.3vw] uppercase tracking-wide">
              DEVELOPMENT
            </p>
            <a
              className="font-medium text-gray-400  pl-[4.3vw]  pt-[4vw] tracking-tighter"
              href=""
            >
              Learn More ⇾
            </a>
          </div>
          <div className="w-[24vw] h-[24vw]   shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-t from-gray-50 to-slate-50 transition duration-300 ease-in-out hover:-scale-x-110">
            <h1 className="text-[3vw] font-semibold tracking-wide pt-[8vw] pl-[4vw]">
              {" "}
              ⩤⩥
            </h1>
            <p className="font-semibold text-[3vw] text-gray-800 ml-[2vw] uppercase tracking-tight pl-[2vw] ">
              ⋈ ui/ux
            </p>
            <p className="font-bold  text-gray-600 pl-[4.3vw] uppercase tracking-wide">
              DEVELOPMENT
            </p>
            <a
              className="font-medium text-gray-400  pl-[4.3vw]  pt-[4vw] tracking-tighter"
              href=""
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
