import Box from "@mui/material/Box";
import Sidebar from "../Sidebar";
import DrawerHeader from "../components/DrawerHeader";
import { createTheme } from "@mui/material/styles";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import { useState } from "react";
import "../main.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

export default function VoiceClone() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    isPlaying ? setIsPlaying(false) : setIsPlaying(true);
  };

  return (
    <Box className="flex">
      <Sidebar />
      <Box className="w-screen h-full justfiy-center items-center">
        <DrawerHeader />
        <p>This is Voice Clone</p>
        <div className="w-full h-auto flex border flex-col justify-center items-center px-5">
          <textarea
            className=" w-1/2 h-32 m-2 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your text here..."
          ></textarea>

          <div className="w-1/2 mb-1 grid grid-cols-2 gap-4">
            <div className="flex flex-row  items-start">
              <button className="bg-white hover:shadow-rounded border text-black font-bold py-1.5 px-4 rounded-full transition ease-in duration-300 text-sm">
                select voice
              </button>
              <button onClick={handlePlay}>
                {isPlaying ? (
                  <PauseCircleFilledRoundedIcon fontSize="large" />
                ) : (
                  <PlayCircleRoundedIcon fontSize="large" />
                )}
              </button>
            </div>
            <div className="flex flex-col justify-center items-end">
              <button className="bg-white  hover:shadow-rounded border  text-black font-bold py-1.5 px-4 rounded-full transition ease-in duration-300 text-sm">
                generate voice
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
