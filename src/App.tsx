import { Box, Image } from "@chakra-ui/react";
import { useTimeManager } from "./store/contexts/TimeManagerContext";
import ParallaxClouds from "./components/background/parallax-clouds/ParallaxClouds";
import MoonAndSunAnimation from "./components/background/moon-and-sun/MoonAndSun";
import {
  MOON_START_TIME,
  SUN_START_TIME,
  MOON_PEAK_TIME,
  SUN_PEAK_TIME,
  MOON_END_TIME,
  SUN_END_TIME,
} from "./utils/helpers";
import PaperAnimation from "./components/paper-animation/AnimatedPaper";
import StarField from "./components/background/starfield/StarField";
import FirefliesAnimation from "./components/fireflies/Fireflies";
import ParallaxLayers from "./components/background/layers/ParallaxLayers";
import "./App.css";
import "./utils/keyframes.css";
import { useAnimationContext } from "./store/contexts/AnimationContext";
import DraggableBox from "./components/draggable/DraggableBox";
import PixelArtButton from "./components/pixel-button/PixelButton";
import CVBook from "./components/cv/CVBook";
import Wood from "./assets/table/wood.png";
import CVCover from "./components/cv/cv-paper/CVCover";

function App() {
  const { cloudConfig, gradientColor, astralBody, timeDate, layerConfig } =
    useTimeManager();
  const { collapsed, showPolaroid, hidePolaroid, toggleCollapse } =
    useAnimationContext();

  return (
    <Box backgroundColor="#150b08" pos="relative" height="100vh" width="100vw">
      {/* <DraggableBox width="100%" height="100%" borderRadius="full"> */}
      {/* <PaperAnimation /> */}

      {/* </DraggableBox> */}

      <DraggableBox width="150px" height="150px" borderRadius="full">
        <CVBook />
      </DraggableBox>
      <div
        style={{
          backgroundImage: `url(${Wood})`, // Set your image here
          backgroundRepeat: "repeat-x", // Repeat horizontally
          backgroundSize: "contain", // Adjust based on your needs (e.g., 'cover', 'contain')
          width: "30vw", // Full width of viewport
          height: "30%", // Adjust height to show as much as you want
          position: "absolute",
          zIndex: 10,
          bottom: 0,
        }}
      ></div>
      <Box className="container">
        <Box
          clipPath="polygon(100% 0px, 75.21% 0px, 100% 101.45%)"
          position="absolute"
          zIndex={12}
          bg="#6b1d1d"
          top={0}
          right={0}
          width="20vw"
          height="50vh"
          id="curtain-1"
        ></Box>
        <Box
          clipPath="polygon(95.05% 100.85%, 99.86% 40.49%, 100.00% 100.31%)"
          position="absolute"
          zIndex={12}
          bg="#6b1d1d"
          bottom={0}
          right={0}
          width="40vw"
          height="50vh"
          id="curtain-1"
        ></Box>
        <Box
          clipPath="polygon(0% 0px, 24.79% 0px, 0% 101.45%)" // Flipped horizontally
          position="absolute"
          zIndex={12}
          bg="#6b1d1d"
          top={0}
          left={0} // Change `right` to `left` for correct positioning
          width="20vw"
          height="50vh"
          id="curtain-1"
        ></Box>
        <Box
          clipPath="polygon(4.95% 100.85%, 0.14% 40.49%, 0% 100.31%)" // Flipped horizontally
          position="absolute"
          zIndex={12}
          bg="#6b1d1d"
          bottom={0}
          left={0} // Change `right` to `left` for correct positioning
          width="40vw"
          height="50vh"
          id="curtain-1"
        ></Box>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr 1fr"
          gap="0" // No gap for seamless borders
          position="absolute"
          width="100%" // Adjust width as needed
          height="100%" // Adjust height as needed
          border="2px solid #333" // Outer border of the window
          top="50%" // Positioning example, adjust as needed
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={11}
        >
          {/* Each pane cell */}
          <Box border="0.2em solid #333" />
          <Box border="0.2em  solid #333" />
          <Box border="0.2em  solid #333" />
          <Box border="0.2em  solid #333" />
        </Box>
        <Box
          bgGradient={gradientColor}
          className={`animated-box ${collapsed ? "collapsed" : ""}`}
        >
          <MoonAndSunAnimation
            astralbody={astralBody}
            overNight={astralBody === "moon"}
            startTime={astralBody === "moon" ? MOON_START_TIME : SUN_START_TIME}
            peakTime={astralBody === "moon" ? MOON_PEAK_TIME : SUN_PEAK_TIME}
            endTime={astralBody === "moon" ? MOON_END_TIME : SUN_END_TIME}
            currentTime={timeDate}
          />
          {cloudConfig && <ParallaxClouds cloudsConfig={cloudConfig} />}
          <StarField />
          <FirefliesAnimation />
          <ParallaxLayers config={layerConfig} />
        </Box>
        {/* <Box
          className={`polaroid ${showPolaroid ? "show" : ""} ${
            hidePolaroid ? "hide-on-expand" : ""
          }`}
        /> */}
        {/* <PixelArtButton onClick={toggleCollapse} /> */}
      </Box>
    </Box>
  );
}

export default App;
