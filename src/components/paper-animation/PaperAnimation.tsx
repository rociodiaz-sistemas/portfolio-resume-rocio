import { motion } from "framer-motion";
import React from "react";
import paperImage from "../../assets/paper.png"; // Replace with your image path
import { Box, Text } from "@chakra-ui/react";

// Define animation variants
const paperVariants = {
  hidden: { x: "20vw", y: "20vh", rotate: -45 }, // Start from bottom-right corner
  visible: { x: "-60vw", y: "-70vh", rotate: 0 }, // End at top-left corner
};

const PaperAnimation: React.FC = () => {
  return (
    <Box pos="relative" w="100%" h="100%" overflow="hidden">
      {/* Animated container for both paper and text */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "30%",
          height: "auto",
          transformOrigin: "bottom right",
          zIndex: 10, // Ensure the paper is above the background
        }}
        variants={paperVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        {/* Paper image */}
        <img
          src={paperImage}
          alt="Animated Paper"
          style={{
            width: "100%", // Make image fill the motion container
            height: "auto",
          }}
        />

        {/* Text on the paper */}
        <Box
          position="absolute"
          top="20%" // Adjust to position the text properly within the paper
          left="10%" // Adjust this value to center the text within the paper
          width="60%"
          height="50%"
          textAlign="center"
          zIndex={11}
        >
          <Text
            fontFamily="heading"
            fontSize="lg"
            color="black"
            fontWeight="bold"
          >
            Hello, I'm...
          </Text>
        </Box>
      </motion.div>
    </Box>
  );
};

export default PaperAnimation;
