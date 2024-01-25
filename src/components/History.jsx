import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const History = () => {
  const imgData = {
    src_one:
      "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    src_two:
      "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    src_three:
      "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    src_four:
      "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    src_five:
      "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const [updatePic, setUpdatePic] = useState(imgData.src_one);

  return (
    <>
     <div className="w-full bg-white flex justify-center p-4 ">
        <div className="w-3/4 flex items-center gap-5 text-2xl font-bold text-black  justify-between">
          <div className="w-36 flex flex-row gap-3 items-center ">
            <img
              src={logo}
              alt=""
              className="lg:w-36 w-44 h-full object-cover rounded-full"
            />
          </div>
          <div className="flex items-end h-full flex-row gap-24 underline underline-offset-8">
            <p className="text-[18px]">01.BANNER</p>
            <p className="text-[18px]">02.TEAM</p>
          </div>
        </div>
      </div>
    <div className="relative">
      <img src={updatePic} className="lg:h-screen h-auto  w-full object-cover" alt="" />
      <div className="absolute inset-0 flex flex-col justify-center items-center  mt-10 h-60 ">
      <div className="w-3/5  h-36 flex items-center lg:flex hidden">
      <p className="text-8xl font-semibold text-gray-700 ">01.</p>
          <p className="text-4xl text-blue-950 font-bold relative right-7">HISTORY</p>
          <p className="text-md text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus cupiditate commodi vero, maxime, omnis inventore esse eum id eos eius quas accusamus quisquam ipsam, </p>
          </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end ">
        <div className=" w-full h-52 flex justify-center place-content-center items-center flex-wrap lg:flex-row flex-col lg:block hidden">
          <div className="flex justify-center gap-5 items-center flex-wrap ">
            <img
              src={imgData.src_two}
              alt=""
              className="lg:w-56 w-28 lg:h-full h-20 cursor-pointer"
              onClick={() => setUpdatePic(imgData.src_two)}
            />
            <img
              src={imgData.src_three}
              alt=""
              className="lg:w-56 w-32 lg:h-full h-20 cursor-pointer"
              onClick={() => setUpdatePic(imgData.src_three)}
            />
            <img
              src={imgData.src_four}
              alt=""
              className="lg:w-56 w-28 lg:h-full h-20 cursor-pointer"
              onClick={() => setUpdatePic(imgData.src_four)}
            />
            <img
              src={imgData.src_five}
              alt=""
              className="lg:w-56 w-28 lg:h-full h-20 cursor-pointer"
              onClick={() => setUpdatePic(imgData.src_five)}
            />
          </div>
        </div>
      </div>
      <div className=" w-full h-52 flex justify-center place-content-center items-center flex-wrap lg:flex-row flex-col block lg:hidden z-10">
          <div className="flex justify-center gap-5 items-center flex-wrap z-10">
            <img
              src={imgData.src_two}
              alt=""
              className="lg:w-56 w-32 lg:h-full h-20 cursor-pointer"
              onClick={() => setUpdatePic(imgData.src_two)}
            />
            <img
              src={imgData.src_three}
              alt=""
              className="lg:w-56 w-32 lg:h-full h-20 cursor-pointer"
              onClick={() => setUpdatePic(imgData.src_three)}
            />
            <img
              src={imgData.src_four}
              alt=""
              className="lg:w-56 w-32 lg:h-full h-20 cursor-pointer"
              onClick={() => setUpdatePic(imgData.src_four)}
            />
            <img
              src={imgData.src_five}
              alt=""
              className="lg:w-56 w-32 lg:h-full h-20 cursor-pointer"
              onClick={() => setUpdatePic(imgData.src_five)}
            />
          </div>
        </div>
    </div>
    </>
  );
};

export default History;
