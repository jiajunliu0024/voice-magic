import Box from "@mui/material/Box";
import Sidebar from "../Sidebar";
import DrawerHeader from "../components/DrawerHeader";
import TextField from "@mui/material/TextField";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import "../main.css";

export default function VoiceClone() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [charcount, setCharCount] = useState(0);
  const [maxChar, setMaxChar] = useState(5000);
  const [enter, setEnter] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handlePlay = () => {
    isPlaying ? setIsPlaying(false) : setIsPlaying(true);
  };
  const handleOnclickText = () => {
    setEnter(true);
  };

  useEffect(() => {
    console.log("Enter", enter);
  }, [enter]);

  return (
    <Box className="flex">
      {isSmallScreen ? <></> : <Sidebar className="" />}
      <Box className="w-screen h-full flex flex-col justfiy-center items-center">
        <DrawerHeader />
        <div className="w-full mt-10 h-auto flex flex-col justify-center items-center">
          <div
            className={`w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center px-5 py-5 rounded-xl md:border-spacing-1 md:shadow-lg`}
          >
            <TextField
              id="outlined-multiline-static"
              className="w-full h-64 m-2 p-2 rounded-md"
              multiline
              rows={9}
              defaultValue="Start typing here or paste any text..."
              variant="outlined"
              onClick={handleOnclickText}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
            <div className="w-full mb-1 mt-2 grid grid-cols-2 ">
              <div className="flex flex-row gap-2 items-center">
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
              <div className="flex flex-row justify-end items-center">
                <p className="mr-2">
                  {charcount} / {maxChar}
                </p>
                <button className="bg-black hover:shadow-rounded border  text-white  py-1.5 px-4 rounded-full transition ease-in duration-300 text-sm">
                  generate voice
                </button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
