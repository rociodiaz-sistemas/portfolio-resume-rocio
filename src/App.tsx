import "./App.css";
import { useTimeManager } from "./store/contexts/TimeManagerContext";
import ParallaxClouds from "./components/background/parallax-clouds/ParallaxClouds";
import { Box } from "@chakra-ui/react";

function App() {
  const { cloudConfig, gradientColor } = useTimeManager();

  return (
    <>
      {" "}
      <Box
        pos="absolute"
        zIndex="0"
        overflow="hidden"
        w="100%"
        h="100%"
        bgGradient={gradientColor}
      >
        {cloudConfig && <ParallaxClouds cloudsConfig={cloudConfig} />}
      </Box>
    </>
  );
}

export default App;
