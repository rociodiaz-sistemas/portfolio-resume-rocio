import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
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

function App() {
  const { cloudConfig, gradientColor, astralBody, timeDate, layerConfig } =
    useTimeManager();
  const [collapsed, setCollapsed] = useState(false);
  const [showPolaroid, setShowPolaroid] = useState(false);
  const [hidePolaroid, setHidePolaroid] = useState(false);

  const handleCollapseToggle = () => {
    if (collapsed) {
      // Start expanding
      setHidePolaroid(true);
      setTimeout(() => {
        setCollapsed(false);
        setShowPolaroid(false); // Hide polaroid after expansion
        setHidePolaroid(false); // Reset hide state
      }, 100); // Quick hide duration to match the transition
    } else {
      // Start collapsing
      setCollapsed(true);
      setShowPolaroid(true); // Show polaroid when collapsing
    }
  };

  return (
    <Box backgroundColor="#402d85" pos="relative">
      <PaperAnimation collapsed={collapsed} />

      <Box className="container">
        <Box
          className={`animated-box ${collapsed ? "collapsed" : ""}`}
          style={{ background: gradientColor }}
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
        <Box
          className={`polaroid ${showPolaroid ? "show" : ""} ${
            hidePolaroid ? "hide-on-expand" : ""
          }`}
        />
        <Button
          pos="absolute"
          top="10px"
          left="10px"
          onClick={handleCollapseToggle}
        >
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </Box>
    </Box>
  );
}

export default App;
