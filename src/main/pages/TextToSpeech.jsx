import Box from "@mui/material/Box";
import Sidebar from "../Sidebar";
import DrawerHeader from "../components/DrawerHeader";

export default function TextToSpeech() {
  return (
    <div className="flex">
      <Sidebar />
      <Box>
        <DrawerHeader />
        <p>This is Text 2 speech</p>
        <p>This is Text 2 speech</p>
        <p>This is Text 2 speech</p>
      </Box>
    </div>
  );
}
