import "./App.css";
import { useTimeManager } from "./store/contexts/TimeManagerContext";
import ParallaxClouds from "./components/background/parallax-clouds/ParallaxClouds";
import { Box } from "@chakra-ui/react";
import MoonAndSunAnimation from "./components/background/moon-and-sun/MoonAndSun";
import {
  MOON_START_TIME,
  SUN_START_TIME,
  MOON_PEAK_TIME,
  SUN_PEAK_TIME,
  MOON_END_TIME,
  SUN_END_TIME,
} from "./utils/helpers";
import NightLayers from "./components/background/night-layers/NightLayers";
import PaperAnimation from "./components/paper-animation/PaperAnimation";
import StarField from "./components/background/starfield/StarField";
import FirefliesAnimation from "./components/fireflies/Fireflies";

function App() {
  const { cloudConfig, gradientColor, astralBody, timeDate } = useTimeManager();

  return (
    <>
      <Box pos="relative" w="100vw" h="100vh">
        <Box
          pos="absolute"
          zIndex="0"
          overflow="hidden"
          w="100%"
          h="70%"
          bgGradient={gradientColor}
          id="gradient-sky"
        >
          <MoonAndSunAnimation
            astralbody={astralBody}
            overNight={astralBody === "moon" ? true : false}
            startTime={astralBody === "moon" ? MOON_START_TIME : SUN_START_TIME} // Start time (05:00)
            peakTime={astralBody === "moon" ? MOON_PEAK_TIME : SUN_PEAK_TIME} // Peak time (14:00)
            endTime={astralBody === "moon" ? MOON_END_TIME : SUN_END_TIME} // End time (18:00)
            currentTime={timeDate} // Pass current time to MoonAnimation
          />
          {cloudConfig && <ParallaxClouds cloudsConfig={cloudConfig} />}

          <StarField />
        </Box>
        <FirefliesAnimation />
        <PaperAnimation />
      </Box>
      <NightLayers />
    </>
  );
}

export default App;
