import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./main/Home";
import TextToSpeech from "./main/pages/TextToSpeech";
import VoiceClone from "./main/pages/VoiceClone";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/text-to-speech" element={<TextToSpeech />} />
          <Route path="/pages/voice-clone" element={<VoiceClone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
