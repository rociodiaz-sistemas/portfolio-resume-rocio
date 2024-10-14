import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface PaperProps extends BoxProps {
  children: React.ReactNode;
}

const FoldedCorner: React.FC<{
  position: 'bottom-right' | 'bottom-left';
}> = ({ position }) => {
  const isBottomRight = position === 'bottom-right';
  const clipPath = isBottomRight
    ? 'polygon(0px 0px, 101.67% 0.00%, 0px 100%)' // Bottom right
    : 'polygon(100% 0px, 2px 3.33%, 100% 100%)'; // Bottom left
  
  const shadowBox = isBottomRight
    ? 'polygon(60px 2px, 100% 100%, 0px 100%)' // Bottom right shadow
    : 'polygon(0 0, 0 100%, 60px 100%)'; // Bottom left shadow

  return (
    <>
      {/* Folded corner effect */}
      <Box
        position="absolute"
        bottom="0"
        right={isBottomRight ? '0' : undefined}
        left={!isBottomRight ? '0' : undefined}
        width="60px"
        height="60px"
        bg="#bfbaba57" // Color for the "backside" of the fold
        clipPath={clipPath}
        boxShadow={isBottomRight ? '-4px -4px 6px rgba(0, 0, 0, 0.25)' : '4px -4px 6px rgba(0, 0, 0, 0.25)'}
        zIndex="2" // Ensure this is above the paper
        borderLeft={isBottomRight ? '3px solid #b2b6b9' : undefined}
        borderRight={!isBottomRight ? '3px solid #b2b6b9' : undefined}
      />

      {/* The shadow from the folded paper */}
      <Box
        position="absolute"
        bottom="0"
        right={isBottomRight ? '0' : undefined}
        left={!isBottomRight ? '0' : undefined}
        width="60px"
        height="60px"
        bg="gray.400"
        clipPath={shadowBox}
        boxShadow={isBottomRight ? '-8px -8px 15px rgba(0, 0, 0, 0.3)' : '8px -8px 15px rgba(0, 0, 0, 0.3)'}
        zIndex="1" // Under the fold
      />
    </>
  );
};

const CVPaper: React.FC<PaperProps> = ({ children, ...props }) => {
  const [leftContent, rightContent] = React.Children.toArray(children) as React.ReactNode[];

  return (
    <Box
      position="relative"
      width="210mm" // A4 width
      height="90vh" // Paper height
      bg="white"
      boxShadow="md"
      overflow="hidden"
      display="flex" // Use flex to separate left and right halves
      borderLeftWidth="8px"
      borderRightWidth="8px"
      borderTopWidth="4px"
      borderBottomWidth="4px"
      borderColor="rgb(129, 110, 91)"
      borderStyle="solid"
      {...props}
    >
      {/* Left Half */}
      <Box
        flex="1" // Takes up half of the space
        borderRight="2px solid #a89d91"
        position="relative" // Make this position relative for shadow positioning
        bg="linear-gradient(90deg, rgba(217, 217, 217, 0) 0%, rgba(217, 217, 217, 0) 40%, rgba(217, 217, 217, 0.26) 70%, rgba(234, 208, 208, 0.22) 85%, rgb(192, 184, 184) 100%)"

      >
        {/* Shadow Box */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.1)" // Light shadow effect
          borderLeftWidth="8px"
          borderColor="rgba(129, 110, 91, 0.6)" // Slightly darker for the shadow
          borderStyle="solid"
          zIndex="0" // Behind the content
          pointerEvents="none" // Allows clicking through to the content
        />
        {leftContent}
        <FoldedCorner position="bottom-left" />
      </Box>

      {/* Right Half */}
      <Box
        borderLeft="1px solid #a89d91"
        flex="1" // Takes up half of the space
        position="relative" // Make this position relative for shadow positioning
        bg="linear-gradient(90deg, rgb(192, 184, 184) 0%, rgba(234, 208, 208, 0.22) 15%, rgba(227, 227, 227, 0.26) 30%, rgba(217, 217, 217, 0) 40%, rgba(217, 217, 217, 0) 100%)"
        >
        {/* Shadow Box */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.1)" // Light shadow effect
          borderRightWidth="8px"
          borderColor="rgba(129, 110, 91, 0.6)" // Slightly darker for the shadow
          borderStyle="solid"
          zIndex="0" // Behind the content
          pointerEvents="none" // Allows clicking through to the content
        />
        {rightContent}
        <FoldedCorner position="bottom-right" />
      </Box>
    </Box>
  );
};

export default CVPaper;
