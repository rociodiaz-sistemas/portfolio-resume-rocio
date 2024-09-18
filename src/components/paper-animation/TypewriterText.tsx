import React from "react";
import { Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

interface AnimatedTextProps {
  animationComplete: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ animationComplete }) => (
  <>
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
          loop={0}
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
  </>
);

export default AnimatedText;
