import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import butterflyImages from "./assets/butterflymapping"; // Adjust path as needed

// Define the type for each butterfly
interface ButterflyProps {
  src: string;
  size: number; // Size of the butterfly
}

// Define the Butterfly component
const Butterfly: React.FC<ButterflyProps> = ({ src, size }) => {
  // Generate random movement parameters
  const generateRandomMovement = () => {
    const randomX = Math.random() * 100; // Random position (0% to 100%)
    const randomY = Math.random() * 100; // Random position (0% to 100%)
    const randomOffsetX = (Math.random() - 0.5) * 50; // Small random offset for smooth movement
    const randomOffsetY = (Math.random() - 0.5) * 50;

    return {
      startX: randomX,
      startY: randomY,
      endX: randomX + randomOffsetX,
      endY: randomY + randomOffsetY,
    };
  };

  // Initialize random movement
  const { startX, startY, endX, endY } = generateRandomMovement();

  return (
    <motion.div
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        background: `url(${src}) no-repeat`,
        backgroundSize: "cover",
        zIndex: 22,
      }}
      initial={{ x: startX + "%", y: startY + "%", opacity: 0.8 }}
      animate={{
        x: [startX + "%", endX + "%", startX + "%"],
        y: [startY + "%", endY + "%", startY + "%"],
        opacity: [0.8, 0.5, 0.8],
      }}
      transition={{
        duration: 10 + Math.random() * 10, // Random duration between 10 and 20 seconds
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

// Define the Butterflies component
const Butterflies: React.FC = () => {
  const numberOfButterflies = 20; // Number of butterflies to render

  // Randomly choose butterfly images
  const getRandomButterflyImage = () => {
    const keys = Object.keys(butterflyImages);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return butterflyImages[keys[randomIndex]];
  };

  return (
    <Box pos="absolute" w="100%" h="100%" overflow="hidden">
      {Array.from({ length: numberOfButterflies }).map((_, index) => (
        <Butterfly
          key={index}
          src={getRandomButterflyImage()}
          size={30} // Adjust size as needed
        />
      ))}
    </Box>
  );
};

export default Butterflies;
