import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import TooltipIcon from "./TooltipIcon";
import MailIcon from "../../assets/icons/mail.svg";
import PhoneIcon from "../../assets/icons/mobile-phone.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import "./PaperAnimation.css"; // Ensure CSS file contains keyframes
import AnimatedText from "./TypewriterText";

interface AnimatedPaperProps {
  collapsed: boolean; // Accept collapsed state as prop
}

const AnimatedPaper: React.FC<AnimatedPaperProps> = ({ collapsed }) => {
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
          width: collapsed ? "80vw" : "30%", // Change width based on collapsed prop
          height: collapsed ? "40%" : "auto",
          transformOrigin: "bottom right",
          zIndex: collapsed ? 0 : 10,
          transform: `translateY(${transformY}px) translateX(${
            collapsed ? "-25%" : "0"
          })`, // Adjust positioning only when collapsed
          transition: "transform 0.2s ease-in-out, width 0.3s ease", // Smooth transition for size and position
        }}
        initial={{ x: "20vw", y: "20vh", rotate: -45 }} // Old initial values
        animate={
          collapsed
            ? { x: "-10vw", y: "-50vh", rotate: 0 }
            : { x: "-60vw", y: "-70vh", rotate: 0 }
        } // Update based on collapsed state
        transition={{ duration: 3, ease: "easeInOut" }}
        onAnimationComplete={() => {
          setAnimationComplete(true);
          console.log("Initial animation completed");
        }}
      >
        <motion.div
          id="paper"
          style={{
            height: "100%", // Keep full height of the parent container
            width: "100%", // Keep full width of the parent container
            backgroundColor: "#d7b594",
            border: "7px double rgb(129, 110, 91)",
            textAlign: "center",
            paddingLeft: "15px",
            paddingBottom: "5px",
            paddingRight: "10px",
          }}
          animate={
            collapsed
              ? { rotate: [0, 0, 0, 0] }
              : {
                  y: [-8, 10, -8], // Floating animation
                  rotate: [0, 1, -1, 0],
                }
          }
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div>
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
          </div>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default AnimatedPaper;
