import { motion } from "framer-motion";
import React from "react";
import { Box, Text } from "@chakra-ui/react";

// Define animation variants
const paperVariants = {
  hidden: { x: "20vw", y: "20vh", rotate: -45 }, // Start from bottom-right corner
  visible: { x: "-60vw", y: "-80vh", rotate: 0 }, // End at top-left corner
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
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <Box
          backgroundColor="#d7b594"
          border="black 4px solid"
          boxShadow="xl"
          textAlign="center"
        >
          {" "}
          <Text
            fontFamily="heading"
            fontSize="70px"
            color="black"
            fontWeight="bold"
          >
            Rocio Diaz
          </Text>
        </Box>
      </motion.div>
    </Box>
  );
};

export default PaperAnimation;
