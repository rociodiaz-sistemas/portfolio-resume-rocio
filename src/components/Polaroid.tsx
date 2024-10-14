import React from 'react';
import { Box } from '@chakra-ui/react';

interface PolaroidProps {
  imageSrc: string; // Source of the image for the Polaroid
  className?: string; // Additional class names for styling
}

const Polaroid: React.FC<PolaroidProps> = ({ imageSrc, className }) => {
  return (
    <Box
      width="22vw"
      height="40vh"
      border="10px solid #fff"
      borderBottom="7vh solid #fff"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
      margin="20px auto" // Center the Polaroid
      className={className}
    >
      {/* Image */}
      <Box
        as="img"
        src={imageSrc}
        alt="Polaroid"
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Box>
  );
};

export default Polaroid;
