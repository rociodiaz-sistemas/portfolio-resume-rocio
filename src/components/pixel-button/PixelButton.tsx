import React from 'react';
import { Box } from '@chakra-ui/react';

interface PixelArtButtonProps {
  onClick: () => void; // Define the onClick prop type
}

const PixelArtButton: React.FC<PixelArtButtonProps> = ({ onClick }) => {
  return (
    <Box
      as="button"
      width="120px" // Adjust the size of the button
      height="50px" // Height of the button
      bg="green.500" // Button background color
      color="white" // Text color
      fontSize="20px" // Font size for the "START" text
      fontFamily="monospace" // Monospace font to keep a blocky look
      textAlign="center" // Center text alignment
      lineHeight="50px" // Vertical centering the text
      border="4px solid black" // Black border for a pixel art feel
      position="absolute" // Set position to absolute
      top="50vh" // Position from the top
      left="50vw" // Position from the left
      _hover={{ bg: "green.600" }} // Simple hover effect
      onClick={onClick} // Attach onClick event
      sx={{
        // Adding pixelated look using box shadows for pixel art effect
        boxShadow: `
          4px 4px 0 0 black, /* Lower right shadow */
          -4px -4px 0 0 black, /* Upper left shadow */
          inset 0px 0px 0 4px white /* Inner white border for pixel art effect */
        `,
      }}
    >
      START
    </Box>
  );
};

export default PixelArtButton;
