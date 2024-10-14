import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CVCover: React.FC = () => {
  return (
    <Box
      width="100px" // Adjust size as needed
      height="150px" // Adjust size as needed
      bg="rgb(129, 110, 91)" // Brown color for the square
      boxShadow="md" // Adds a little shadow for depth
      borderTop="6px double #d7b594" // Only top border, bigger to fit the stacked colors
      borderTopRightRadius="8px" // Adds rounded corners
      borderBottomRightRadius="8px"
      borderRight='5px #5D4b46 solid'
      borderLeft='3px #5D4b46 dashed'
      borderBottom='1px black solid'
      fontFamily='rainyhearts'
      fontSize='20px'
      padding='9px'
    >
      <Box border='4px double #5D4b46'>
      <Text textAlign='center' lineHeight='20px'>Rory's CV</Text>
      
      </Box>
    </Box>
  );
};

export default CVCover;
