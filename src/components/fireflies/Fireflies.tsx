import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Define a fixed set of fireflies
const firefliesData = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  top: Math.random() * 100, // Random position between 0% and 100%
  left: Math.random() * 100, // Random position between 0% and 100%
  opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
}));

// Firefly component
const Firefly: React.FC<{ top: number; left: number; opacity: number }> =
  React.memo(({ top, left, opacity }) => {
    const getRandom = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    return (
      <motion.div
        style={{
          zIndex: 11,
          position: "absolute",
          width: "2px",
          height: "2px",
          borderRadius: "50%",
          backgroundColor: "yellow",
          boxShadow: "0 0 10px yellow",
          opacity,
          top: `${top}%`,
          left: `${left}%`,
        }}
        animate={{
          x: [0, getRandom(-30, 30), getRandom(-60, 60)],
          y: [0, getRandom(-30, 30), getRandom(-60, 60)],
          opacity: [opacity, opacity * 0.5, opacity],
        }}
        transition={{
          duration: getRandom(5, 10),
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    );
  });

// FirefliesAnimation component
const FirefliesAnimation: React.FC = () => {
  return (
    <Box pos="absolute" overflow="hidden" w="100%" h="40%" bottom="0px">
      {firefliesData.map((firefly) => (
        <Firefly
          key={firefly.id}
          top={firefly.top}
          left={firefly.left}
          opacity={firefly.opacity}
        />
      ))}
    </Box>
  );
};

export default FirefliesAnimation;
