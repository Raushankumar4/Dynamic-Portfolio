import React from "react";
import Marquee from "react-fast-marquee";
const Marque = () => {
  return (
    <>
      <div className="bg-[#38505e]   w-full py-[3vw] rounded-tl-3xl  rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
        <div className="text-container border-t-[1px] border-zinc-200 border-b-[1px] flex whitespace-nowrap overflow-hidden">
          <Marquee speed={180} autoFill pauseOnHover direction="right">
            <h1 className="text-[9vw] tracking-tighter gap-4 font-extrabold text-white uppercase leading-1">
              Welcome{" "}
              <span className="text-blue-800">
                <span className="text-red-400">to my</span> official
              </span>{" "}
              <span className="ml-4 mr-4 text-gray-500 text-[6vw] ">
                Portfolio
              </span>
            </h1>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Marque;
