import Box from "@mui/material/Box";
import Sidebar from "../Sidebar";
import DrawerHeader from "../components/DrawerHeader";
import "../main.css";

export default function VoiceClone() {
  return (
    <Box className="flex">
      <Sidebar />
      <Box className="w-screen h-full">
        <DrawerHeader />
        <p>This is Voice Clone</p>
        <div className="w-full h-auto flex border flex-col justify-center items-center px-5">
          <textarea
            className=" w-1/2 h-32 m-10 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your text here..."
          ></textarea>
          <div className="w-1/2 mb-5 flex flex-row space-x-5 justify-items-stretch">
            <button className="bg-white hover:shadow-rounded border text-black font-bold py-2 px-4 rounded-full transition ease-in duration-300">
              Generate Voice
            </button>
            <button className="bg-white  hover:shadow-rounded border  text-black font-bold py-2 px-4 rounded-full transition ease-in duration-300">
              select voice
            </button>
          </div>
        </div>
      </Box>
    </Box>
  );
}
