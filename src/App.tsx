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

  return (
    <>
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
          <PaperAnimation />
          <ParallaxLayers config={layerConfig} />
        </Box>

        <Button
          pos="absolute"
          top="10px"
          left="10px"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </Box>
    </>
  );
}

export default App;
