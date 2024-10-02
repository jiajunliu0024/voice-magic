import React from "react";
import "./main.css";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-purple-100 to-blue-100 background-animate">
      <div className="h-1/2 w-1/2 flex flex-col justify-center items-start sm: h-full w-full">
        <p className="text-black text-2xl font-bold text-left ml-5">
          Imagine your next AI voice assistant
        </p>
        <p className="text-black text-left ml-5">
          Pioneering research in Text to Speech, AI Voice Generator, and more
        </p>
      </div>
      <div className="h-1/2 w-1/2 flex flex-row justify-center">
        <button className="text-black">Sign in</button>
        <button className="text-black">join us</button>
      </div>
    </div>
  );
}
