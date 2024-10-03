import React from "react";
import "./main.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numberOfBar, setNumberOfBar] = useState(30);

  useEffect(() => {
    console.log("width", width);
    console.log(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    width > 1024 ? setNumberOfBar(30) : setNumberOfBar(15);
    console.log("numberOfBar", numberOfBar);
  }, [width]);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-purple-100 to-blue-100">
      <div className="md:pt-40 h-full w-full flex flex-col justify-start items-start">
        <p className="w-3/4 text-black text-6xl font-semibold text-left px-5">
          Imagine your next AI voice assistant
        </p>
        <p className="w-3/4 text-black mt-5 text-left px-5">
          Pioneering research in Text to Speech, AI voice generation, and voice
          cloning has significantly improved synthetic voice quality.
        </p>
        <div className="w-full mt-5 flex items-start">
          <button className="ml-4 text-white bg-gray-900 border-10 py-3 px-6 focus:outline-none hover:bg-white hover:text-black hover:scale-110 transition duration-700 ease-in-out rounded-full text-base ">
            Have a try
          </button>
          <button className="ml-4 text-white bg-gray-900 border-1 py-3 px-6 focus:outline-none hover:bg-gray-200 hover:text-white transition duration-700 ease-in-out rounded-full text-sm md:text-base ">
            join us in Voice Magic
          </button>
        </div>
        <div className="mx-5 h-32 flex justify-center">
          <div id="bars">
            {Array.from({ length: numberOfBar }).map((_, index) => (
              <div
                key={index}
                className="bar animate-pulse"
                style={{ animationDuration: `${Math.random() * 2 + 1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
