import Input from "@mui/icons-material/Input";
import Box from "@mui/material/Box";

export default function VoiceClone() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <p>This is Voice Clone</p>
        <p>This is Voice Clone</p>
        <p>This is Voice Clone</p>
        <Input
          sx={{
            width: 200,
            height: 150,
          }}
        />
        <Input
          sx={{
            width: 200,
            height: 150,
          }}
        />
      </Box>
    </div>
  );
}
