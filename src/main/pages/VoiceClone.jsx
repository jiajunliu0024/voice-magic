import Input from "@mui/icons-material/Input";
import Box from "@mui/material/Box";
import Sidebar from "../Sidebar";
import DrawerHeader from "../components/DrawerHeader";

export default function VoiceClone() {
  return (
    <Box className="flex">
      <Sidebar />
      <Box>
        <DrawerHeader />
        <Input />
        <p>This is Voice Clone</p>
      </Box>
    </Box>
  );
}
