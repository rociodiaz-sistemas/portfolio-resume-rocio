import { motion } from "framer-motion";
import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import TooltipIcon from "./TooltipIcon";
import MailIcon from "../../assets/icons/mail.svg";
import PhoneIcon from "../../assets/icons/mobile-phone.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import "./PaperAnimation.css"; // Ensure CSS file contains keyframes
import AnimatedText from "./TypewriterText";
import { useAnimationContext } from "../../store/contexts/AnimationContext";
import { PAPER_ANIMATION_INDEX } from "../../utils/zindexes";

const AnimatedPaper: React.FC = () => {
  const { collapsed, paperPositionX } = useAnimationContext();
  const [animationComplete, setAnimationComplete] = useState(false);
  const INITIAL_PAPER_POSITION_ROTATION = { x: "20vw", y: "20vh", rotate: -45 };
  const PAPER_GLIDE_ANIMATION = { duration: 3, ease: "easeInOut" };
  const END_PAPER_POSITION_ROTATION = {
    x: "-60vw",
    y: collapsed ? "-85vh" : "-70vh",
    rotate: 0,
  };
  const PAPER_HOVER_ANIMATION_TRANSITION = {
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
  };

  const PAPER_HOVER_ROTATION = {
    y: [-8, 10, -8],
    rotate: [0, 1, -1, 0],
  };

  const UncollapsedPaperContent = () => {
    return (
      <div>
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
    );
  };

  const CollapsedPaperContent = () => {
    return (
      <div>
        <Flex direction="row" justifyContent="space-between" marginTop="10px">
          <Text
            fontFamily="heading"
            fontSize="50px"
            color="black"
            fontWeight="bold"
            lineHeight="42px"
          >
            Rocio Diaz
          </Text>
          <Flex direction="row" gap="25px">
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
        </Flex>
      </div>
    );
  };

  return (
    <Box pos="absolute" w="100%" h="100vh" overflow="hidden">
      <motion.div
        id="paper-container"
        style={{
          width: "30%",
          height: "auto",
          zIndex: PAPER_ANIMATION_INDEX,
          transform: `translateX(${paperPositionX})`,
        }}
        initial={INITIAL_PAPER_POSITION_ROTATION}
        animate={END_PAPER_POSITION_ROTATION}
        transition={PAPER_GLIDE_ANIMATION}
        onAnimationComplete={() => {
          setAnimationComplete(true);
        }}
      >
        <motion.div
          id="paper"
          animate={PAPER_HOVER_ROTATION}
          transition={{
            ...PAPER_HOVER_ANIMATION_TRANSITION,
            repeatType: "reverse",
          }}
        >
          {collapsed ? <CollapsedPaperContent /> : <UncollapsedPaperContent />}
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default AnimatedPaper;
