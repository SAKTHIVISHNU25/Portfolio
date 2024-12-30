import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import bg_video from "./assets/back-video.mp4";

function App() {
  return (
    <div style={{ position: "relative" }}>
      {/* Background Video */}
      <video
        src={bg_video}
        autoPlay
        loop
        muted
        style={{
          position: "fixed", // Fixes the video in place
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Keeps the video behind other content
        }}
      />
      {/* Global Styles */}
      <GlobalStyle />
      {/* Content */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
