import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import TooltipIcon from "./TooltipIcon";
import MailIcon from "../../assets/icons/mail.svg";
import PhoneIcon from "../../assets/icons/mobile-phone.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import "./PaperAnimation.css"; // Ensure CSS file contains keyframes
import AnimatedText from "./TypewriterText";

// Define animation variants for initial paper movement
const paperVariants = {
  hidden: { x: "20vw", y: "20vh", rotate: -45 },
  visible: { x: "-60vw", y: "-70vh", rotate: 0 },
};

// Define subtle floating animation
const floatingAnimation = {
  y: [-8, 10, -8], // Moves paper up and down
  rotate: [0, 1, -1, 0], // Slight rotation effect
  transition: {
    duration: 6, // Time for one floating cycle
    ease: "easeInOut" as const, // Ensure ease matches Framer Motion types
    repeat: Infinity, // Loop indefinitely
    repeatType: "reverse" as const, // Reverse the direction of the animation
  },
};

const AnimatedPaper: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply scroll-based transformation
  const transformY = Math.min(scrollY, window.innerHeight); // Adjust this if needed

  return (
    <Box pos="absolute" w="100%" h="100vh" overflow="hidden">
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "30%",
          height: "auto",
          transformOrigin: "bottom right",
          zIndex: 10,
          transform: `translateY(${transformY}px)`,
          transition: "transform 0.2s ease-in-out",
        }}
        variants={paperVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 3, ease: "easeInOut" }}
        onAnimationComplete={() => {
          setAnimationComplete(true);
          console.log("Initial animation completed");
        }}
      >
        <motion.div
          id="paper"
          style={{
            width: "80%",
            backgroundColor: "#d7b594",
            border: "7px double rgb(129, 110, 91)",
            textAlign: "center",
            paddingLeft: "15px",
            paddingBottom: "5px",
            paddingRight: "10px",
          }}
          animate={floatingAnimation}
        >
          <AnimatedText animationComplete={animationComplete} />
          <Flex
            direction="row"
            justifyContent="right"
            gap="25px"
            marginTop="10px"
          >
            <TooltipIcon
              copyText="rory.d.dev@gmail.com"
              ariaLabel="mail"
              iconSrc={MailIcon}
            />
            <TooltipIcon
              copyText="+1 (408) 757 0660"
              ariaLabel="phone"
              iconSrc={PhoneIcon}
            />
            <TooltipIcon
              copyText="https://www.linkedin.com/in/rory-diaz/"
              ariaLabel="linkedin"
              iconSrc={LinkedInIcon}
            />
          </Flex>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default AnimatedPaper;
