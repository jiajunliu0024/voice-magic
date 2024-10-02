import React from "react";
import "./main.css";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-purple-100 to-blue-100 background-animate">
      <div className="h-full w-full flex flex-col justify-center items-start">
        <p className="text-black text-5xl font-bold text-left mx-5">
          Imagine your next AI voice assistant
        </p>
        <p className="text-black text-left mx-5">
          Pioneering research in Text to Speech, AI Voice Generator, and more
        </p>
        <div className="w-full h-auto space-x-4 mt-5 flex items-start mx-4">
          <button className=" text-white bg-gray-900 border-10 py-3 px-6 focus:outline-none hover:bg-white hover:text-black hover:scale-110 transition duration-700 ease-in-out rounded-full text-base  md:text-xl">
            Have a try
          </button>
          <a className="ml-2 text-white bg-gray-900 border-1 py-3 px-6 focus:outline-none hover:bg-gray-200 hover:text-white transition duration-700 ease-in-out rounded-full text-base md:text-xl">
            join us in Voice Magic
          </a>
        </div>
      </div>
    </div>
  );
}
