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
import "./utils/keyframes.css";
import { useAnimationContext } from "./store/contexts/AnimationContext";

function App() {
  const { cloudConfig, gradientColor, astralBody, timeDate, layerConfig } =
    useTimeManager();
  const { collapsed, showPolaroid, hidePolaroid, toggleCollapse } =
    useAnimationContext();

  return (
    <Box backgroundColor="#402d85" pos="relative">
      <PaperAnimation collapsed={collapsed} />

      <Box className="container">
        <Box
          backgroundColor={gradientColor}
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
        <Box
          className={`polaroid ${showPolaroid ? "show" : ""} ${
            hidePolaroid ? "hide-on-expand" : ""
          }`}
        />
        <Button pos="absolute" top="10px" left="10px" onClick={toggleCollapse}>
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </Box>
    </Box>
  );
}

export default App;
