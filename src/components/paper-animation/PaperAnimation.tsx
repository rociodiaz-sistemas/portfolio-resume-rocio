import { motion } from "framer-motion";
import React, { useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import MailIcon from "../../assets/icons/mail.svg";
import PhoneIcon from "../../assets/icons/mobile-phone.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "../Tooltip";

// Define animation variants for initial paper movement
const paperVariants = {
  hidden: { x: "20vw", y: "20vh", rotate: -45 }, // Start from bottom-right corner
  visible: { x: "-60vw", y: "-70vh", rotate: 0 }, // End at top-left corner
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

const PaperAnimation: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isTooltipMailOpen, setIsTooltipMailOpen] = useState(false);
  const [isTooltipPhoneOpen, setIsTooltipPhoneOpen] = useState(false);
  const [isTooltipLinkedinOpen, setIsTooltipLinkedinOpen] = useState(false);

  return (
    <Box pos="relative" w="100%" h="100vh" overflow="hidden">
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
        variants={paperVariants} // Initial big animation
        initial="hidden"
        animate="visible"
        transition={{ duration: 3, ease: "easeInOut" }}
        onAnimationComplete={() => {
          setAnimationComplete(true);
          console.log("Initial animation completed");
        }}
      >
        {/* Paper with text */}
        <motion.div
          id="paper"
          style={{
            width: "90%",
            backgroundColor: "#d7b594",
            border: "7px double rgb(129, 110, 91)",
            textAlign: "center",
            paddingLeft: "15px",
            paddingBottom: "5px",
            paddingRight: "10px",
          }}
          animate={floatingAnimation} // Subtle floating effect after initial animation
        >
          <Text
            fontFamily="heading"
            fontSize="25px"
            color="black"
            fontWeight="bold"
            textAlign="left"
          >
            Hello, I'm...
          </Text>
          <Text
            fontFamily="heading"
            fontSize="50px"
            color="black"
            fontWeight="bold"
            lineHeight="42px"
          >
            Rocio Diaz,
          </Text>
          <Text
            fontFamily="heading"
            fontSize="25px"
            color="black"
            fontWeight="bold"
            textAlign="center"
            marginTop="10px"
          >
            {animationComplete ? (
              <Typewriter
                words={[
                  "a creative React developer",
                  "an innovative designer",
                  "a passionate coder",
                ]}
                loop={0} // Set to 0 for no loop, or any number to repeat
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            ) : (
              "‎‎‎"
            )}
          </Text>
          <Flex
            direction="row"
            justifyContent="right"
            gap="10px"
            marginTop="10px"
          >
            <Tooltip content="copied to clipboard!">
              <CopyToClipboard
                text=""
                onCopy={() => setIsTooltipMailOpen(true)}
              >
                <IconButton
                  aria-label="mail"
                  id="mail-icon"
                  width="40px"
                  height="auto"
                >
                  <img src={MailIcon} />
                </IconButton>
              </CopyToClipboard>
            </Tooltip>
            <IconButton
              aria-label="phone"
              id="phone-icon"
              width="35px"
              height="auto"
            >
              <img src={PhoneIcon} />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              id="linkedin-icon"
              width="35px"
              height="auto"
            >
              <img src={LinkedInIcon} />
            </IconButton>
          </Flex>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default PaperAnimation;
