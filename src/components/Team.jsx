import React from "react";

const Team = () => {
  return (
    <div className="lg:h-screen ">
      <div className="h-36 w-full flex justify-center">
        <div className="lg:w-3/5 w-full p-5 lg:p-0  h-36 flex items-center lg:gap-0 gap-5">
          <p className="lg:text-8xl text-4xl font-semibold text-gray-400">02.</p>
          <p className="lg:text-4xl text-2xl text-blue-900 font-bold relative lg:right-7 right-0">Climb</p>
          <p className="lg:text-md text-sm text-gray-500 hidden lg:block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus cupiditate commodi vero, maxime, omnis inventore esse eum id eos eius quas accusamus quisquam ipsam, </p>
          <p className="lg:text-md text-sm text-gray-500 lg:hidden block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="w-full bg-blue-950 flex justify-end">
        <div className="w-3/4 flex items-center gap-5 lg:text-2xl text-lg font-bold text-gray-300 ">
          <p className="p-3 bg-gray-300 text-blue-950 underline underline-offset-8">
            MOUNTAIN 1
          </p>
          <p>MOUNTAIN 2</p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/59106/pexels-photo-59106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start w-full p-5 lg:p-0">
          <div className="lg:w-2/3 w-full  flex justify-center items-center">
            <div className="lg:w-1/2 w-full  h-full opacity-80 bg-gray-100 p-10">
              <p className="text-5xl font-semibold text-blue-900">SCHEDULE</p>
              <div className="w-full flex mt-3">
                <div className="w-1/2 flex flex-col text-lg leading-8 text-gray-700">
                  <p>25 Nov 2016</p>
                  <p>28 Nov 2016</p>
                  <p>18 Dec 2016</p>
                  <p>7 Jan 2017</p>
                </div>
                <div className="w-1/2 flex flex-col text-lg leading-8 text-gray-700">
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-950 flex justify-end p-4 opacity-70">
        <div className="lg:w-3/4 w-full flex items-center gap-5 text-2xl font-bold text-gray-300  justify-between">
          <div className="lg:w-36 w-full flex flex-row gap-3 items-center ">
            <img
              src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-14 h-full object-cover rounded-full"
            />
            <div className="font-bold text-gray-500 lg:text-xl text-sm leading-tight ">
              <p>LOSANGELES</p>
              <p>MOUNTAINS</p>
            </div>
          </div>
          <div className="flex items-end h-full">
            <p className="text-sm">COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
