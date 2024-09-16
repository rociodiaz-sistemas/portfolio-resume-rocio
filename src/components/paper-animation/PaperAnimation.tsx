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
        src={paperImage}
        alt="Animated Paper"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "30%",
          height: "auto",
          zIndex: 10,
          transformOrigin: "bottom right",
        }}
        variants={paperVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 5, ease: "easeInOut" }}
      />
    </Box>
  );
};

export default PaperAnimation;
