import "./App.css";
import { useTimeManager } from "./store/contexts/TimeManagerContext";
import ParallaxClouds from "./components/background/parallax-clouds/ParallaxClouds";
import { Box, Text } from "@chakra-ui/react";
import MoonAndSunAnimation from "./components/background/moon-and-sun/MoonAndSun";
import MountainNight from "./assets/mountains/mountains_sunrise/16_mountains1sunrise.png";

import {
  MOON_START_TIME,
  SUN_START_TIME,
  MOON_PEAK_TIME,
  SUN_PEAK_TIME,
  MOON_END_TIME,
  SUN_END_TIME,
} from "./utils/helpers";

function App() {
  const { cloudConfig, gradientColor, astralBody, timeDate } = useTimeManager();

  return (
    <Box pos="relative" w="100vw" h="100vh">
      <Box
        pos="absolute"
        zIndex="0"
        overflow="hidden"
        w="100%"
        h="100%"
        bgGradient={gradientColor}
      >
        <MoonAndSunAnimation
          astralbody={astralBody}
          overNight={astralBody === "moon" ? true : false}
          startTime={astralBody === "moon" ? MOON_START_TIME : SUN_START_TIME}
          peakTime={astralBody === "moon" ? MOON_PEAK_TIME : SUN_PEAK_TIME}
          endTime={astralBody === "moon" ? MOON_END_TIME : SUN_END_TIME}
          currentTime={timeDate}
        />
        {cloudConfig && <ParallaxClouds cloudsConfig={cloudConfig} />}
        <Text zIndex="999">Hello</Text>
      </Box>

      {/* The Mountain Background with Seamless Horizontal Tiling */}
      <Box
        pos="absolute"
        zIndex="1"
        w="100%"
        h="100%"
        backgroundImage={`url(${MountainNight})`}
        backgroundRepeat="repeat-x"
        backgroundPosition="bottom center"
        backgroundSize="50% auto" // Make the image 10% larger while keeping the aspect ratio
        filter="hue-rotate(160deg) saturate(1.2)" // Rotate green to purple
      />
    </Box>
  );
}

export default App;
