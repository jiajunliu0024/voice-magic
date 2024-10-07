import Input from "@mui/icons-material/Input";
import Box from "@mui/material/Box";

export default function TextToSpeech() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <p>This is Text 2 speech</p>
        <p>This is Text 2 speech</p>
        <p>This is Text 2 speech</p>
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
