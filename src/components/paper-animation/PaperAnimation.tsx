import { motion } from "framer-motion";
import React from "react";
import paperImage from "../../assets/paper.png"; // Replace with your image path
import { Box } from "@chakra-ui/react";

// Define animation variants
const paperVariants = {
  hidden: { x: "20vw", y: "20vh", rotate: -45 }, // Start from bottom-right corner
  visible: { x: "-70vw", y: "-70vh", rotate: 0 }, // End at top-left corner
};

const PaperAnimation: React.FC = () => {
  return (
    <Box pos="relative" w="100%" h="100%" overflow="hidden">
      <motion.img
        src={paperImage} // Use your image here
        alt="Animated Paper"
        style={{
          position: "absolute", // Position absolutely relative to the parent
          bottom: 0,
          right: 0,
          width: "30%", // Adjust size as needed
          height: "auto", // Maintain aspect ratio
          zIndex: 10, // Ensure it's on top of other elements
          transformOrigin: "bottom right", // Ensures the rotation starts from the bottom-right corner
        }}
        variants={paperVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 5, ease: "easeInOut" }} // Adjust duration and easing as necessary
      />
    </Box>
  );
};

export default PaperAnimation;
