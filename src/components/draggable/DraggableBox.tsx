import React, { useState, useRef, ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface DraggableBoxProps extends BoxProps {
  children: ReactNode;
}

const DraggableBox: React.FC<DraggableBoxProps> = ({ children, ...boxProps }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const boxRef = useRef<HTMLDivElement | null>(null);

  // Start dragging
  const handlePointerDown = (event: React.PointerEvent) => {
    startPosRef.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };

    // Add listeners for pointermove and pointerup to the document
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    // Prevent text selection or other unintended behaviors
    event.preventDefault();
  };

  // Move the element
  const handlePointerMove = (event: PointerEvent) => {
    const newX = event.clientX - startPosRef.current.x;
    const newY = event.clientY - startPosRef.current.y;
    setPosition({ x: newX, y: newY });
  };

  // End dragging
  const handlePointerUp = () => {
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
  };

  return (
    <Box
      ref={boxRef}
      position="absolute"
      left={`${position.x}px`}
      top={`${position.y}px`}
      cursor="grab"
      onPointerDown={handlePointerDown}
      zIndex={10} // Ensure it's on top of other elements
      _active={{ cursor: 'grabbing' }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default DraggableBox;
