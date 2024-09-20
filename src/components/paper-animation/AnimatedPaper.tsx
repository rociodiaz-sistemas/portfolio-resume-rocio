import { motion } from "framer-motion";
import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import TooltipIcon from "./TooltipIcon";
import MailIcon from "../../assets/icons/mail.svg";
import PhoneIcon from "../../assets/icons/mobile-phone.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import "./PaperAnimation.css"; // Ensure CSS file contains keyframes
import AnimatedText from "./TypewriterText";
import { useAnimationContext } from "../../store/contexts/AnimationContext";

const AnimatedPaper: React.FC = () => {
  const { collapsed, paperWidth, paperHeight, paperPositionX } =
    useAnimationContext();
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <Box pos="absolute" w="100%" h="100vh" overflow="hidden">
      <motion.div
        id="paper-container"
        style={{
          width: paperWidth,
          height: paperHeight,
          zIndex: collapsed ? 0 : 10,
          transform: `translateX(${paperPositionX})`,
          transition: "transform 0.2s ease-in-out, width 0.3s ease",
        }}
        initial={{ x: "20vw", y: "20vh", rotate: -45 }}
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
