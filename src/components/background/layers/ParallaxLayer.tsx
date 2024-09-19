import React from "react";
import { motion } from "framer-motion";
import "./Layers.css";

const ParallaxLayer: React.FC<{
  backgroundImage: string;
  sensitivity: number;
  mousePosition: { x: number; y: number };
}> = ({ backgroundImage, sensitivity, mousePosition }) => {
  return (
    <motion.div
      className="parallax-layer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionX: `${mousePosition.x * sensitivity}px`,
      }}
    />
  );
};
export default ParallaxLayer;
