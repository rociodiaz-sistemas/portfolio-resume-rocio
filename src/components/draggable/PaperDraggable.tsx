import React from 'react';
import Draggable from 'react-draggable';
import { Box } from '@chakra-ui/react'; // Optional: Use Chakra UI if you have it installed.
import { DRAGGABLE_PAPER } from '../../utils/zindexes';
import motion from 'framer-motion';

const PaperDraggable: React.FC = () => {
  return (
    <Draggable>
      {/* You can also wrap your component with Draggable without any props to enable drag */}
      <Box
        width="600px"
        height="700px"
        backgroundColor="white"
        boxShadow="lg"
        padding="20px"
        cursor="move"
        zIndex={DRAGGABLE_PAPER}
        border="1px solid #ccc"
        position="absolute" // Ensures it doesn't interfere with other elements
      >
        Drag me around!
      </Box>
    </Draggable>
  );
};

export default PaperDraggable;
