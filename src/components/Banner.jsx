import React from "react";
import bgImage from "../assets/banner.png";
import { Link } from "react-router-dom";
import History from "./History";
import Team from "./Team";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          src={bgImage}
          alt=""
          className="lg:h-screen h-[350px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-start items-end">
          <div className="lg:w-1/3 w-full flex gap-20 lg:justify-start justify-end p-3 lg:p-0 mt-5 underline underline-offset-8 text-white font-bold lg:text-md text-sm font-sans">
            <Link
              to={"/history"}
              className="cursor-pointer hover:text-gray-900"
            >
              01. HISTORY
            </Link>
            <Link to={"/team"} className="cursor-pointer hover:text-gray-900">
              02. TEAM
            </Link>
          </div>
        </div>
      </div>
      <History />
      <Team />    
    </>
  );
};

export default Banner;
