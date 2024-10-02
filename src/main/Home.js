import React from "react";
import "./main.css";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-purple-100 to-blue-100 background-animate">
      <div className="h-1/2 w-1/2 flex flex-col justify-center items-start sm: h-full w-full">
        <p className="text-black text-5xl font-bold text-left ml-5">
          Imagine your next AI voice assistant
        </p>
        <p className="text-black text-left ml-5">
          Pioneering research in Text to Speech, AI Voice Generator, and more
        </p>
        <div className="w-full space-x-4 mt-5 flex items-start sm:justify-center ml-5">
          <button className="inline-flex text-white bg-gray-900 border-0 py-2 px-2 focus:outline-none hover:bg-white hover:text-black hover:scale-110 transition duration-700 ease-in-out rounded-lg text-base">
            Have a try
          </button>
          <a className="ml-2 inline-flex text-white bg-gray-900 border-0 py-2 px-2 focus:outline-none hover:bg-gray-200 hover:text-white transition duration-700 ease-in-out rounded-lg text-base">
            join us in Voice Magic
          </a>
        </div>
      </div>
    </div>
  );
}
