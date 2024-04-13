import React from "react";

const Skills = () => {
  return (
    <>
      <h1 className="text-[10vw] text-gray-9 flex justify-center items-center tracking-tight capitalize font-semibold">
        Skills
      </h1>
      <p className="flex font-semibold justify-center items-center tracking-tight text-gray-500 transition duration-300 ease-in-out hover:scale-x-110">
        ⨠ My Technical Level
      </p>
      <div className="flex w-full h-[50vw] gap-[4vw] pl-[8vw] pt-[5vw] ">
        <div className=" w-[40vw] h-[35vw]   shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]  transition duration-300 ease-in-out hover:scale-110">
          <h1 className="flex justify-center items-center text-[2.2vw] tracking-tight font-medium pt-[2vw] leading-[4vw]">
            ⩥ Frontend Developer ⩤
          </h1>

          <div className="skil  flex justify-around">
            <div className="w-[13vw] ">
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                ⨷ HTML
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw] ">
                Basic
              </p>
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                ⨷ CSS
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw]">
                Intermediate
              </p>
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                {" "}
                ⨷ JavaScript
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw]">
                Advance
              </p>
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                {" "}
                ⨷ React{" "}
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw]">
                Intermediate
              </p>
            </div>
            <div className=" w-[13vw] h-[20vw]">
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                ⨷ Tailwand Css
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.3vw]">
                Intermediate
              </p>
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                {" "}
                ⨷ Bootstrap{" "}
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw]">
                Intermediate
              </p>
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                {" "}
                ⨷ C{" "}
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw]">
                Intermediate
              </p>
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                {" "}
                ⨷ C++{" "}
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw]">
                Intermediate
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[40vw] h-[35vw]  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] transition duration-300 ease-in-out hover:scale-110">
          {" "}
          <h1 className="flex justify-center items-center text-[2.2vw] tracking-tight font-medium pt-[2vw] leading-[4vw]">
            ⩥ Backend Developer ⩤
          </h1>
          <div className="skil  flex justify-around">
            <div className="w-[13vw] ">
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                ⨷ Node Js
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw] ">
                Basic
              </p>
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                ⨷ Express Js
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw]">
                Basic
              </p>
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                {" "}
                ⨷ Mongo DB
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw]">
                Basic
              </p>{" "}
              <h1 className="text-[1.6vw] font-semibold tracking-wide mt-[2vw]">
                {" "}
                ⨷ Next Js
              </h1>
              <p className="font-semibold tracking-normal text-gray-600 ml-[2.2vw]">
                Basic
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
