import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SpriteAnimationProps {
  top: number;
  left: number;
  opacity: number;
  src: string; // The sprite sheet image
  frameCount: number; // Number of frames in the sprite sheet
  frameWidth: number; // Width of each frame
  frameHeight: number; // Height of each frame
}

const SpriteAnimation: React.FC<SpriteAnimationProps> = ({
  top,
  left,
  opacity,
  src,
  frameCount,
  frameWidth,
  frameHeight,
}) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frameCount);
    }, 100); // Change frame every 100ms

    return () => clearInterval(interval);
  }, [frameCount]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        opacity,
        zIndex: 10,
        background: `url(${src})`,
        backgroundSize: `${frameWidth * frameCount}px ${frameHeight}px`,
        backgroundPosition: `-${frame * frameWidth}px 0px`,
      }}
    />
  );
};

export default SpriteAnimation;
