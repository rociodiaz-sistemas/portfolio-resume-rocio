import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import NightLayer1 from "../../../../assets/layers/night-layers/MBG5 layer3.png";
import NightLayer2 from "../../../../assets/layers/night-layers/MBG5 layer4.png";
import NightLayer3 from "../../../../assets/layers/night-layers/MBG5 layer5.png";
import NightLayer4 from "../../../../assets/layers/night-layers/MBG5 layer6.png";
import "./NightLayers.css"; // Your custom CSS file

const NightLayers: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX / window.innerWidth - 0.5, // Value between -0.5 and 0.5
      y: event.clientY / window.innerHeight - 0.5,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Layer 1 - Farthest Background (moves the least) */}
      <motion.div
        className="night-layer"
        style={{
          backgroundImage: `url(${NightLayer1})`,
          backgroundPositionX: `${mousePosition.x * 30}px`, // Adjust the movement sensitivity
        }}
      />

      {/* Layer 2 */}
      <motion.div
        className="night-layer"
        style={{
          backgroundImage: `url(${NightLayer2})`,
          backgroundPositionX: `${mousePosition.x * 50}px`, // Moves more than Layer 1
        }}
      />

      {/* Layer 3 */}
      <motion.div
        className="night-layer"
        style={{
          backgroundImage: `url(${NightLayer3})`,
          backgroundPositionX: `${mousePosition.x * 80}px`, // Moves more than Layer 2
        }}
      />

      {/* Layer 4 - Closest Foreground (moves the most) */}
      <motion.div
        className="night-layer"
        style={{
          backgroundImage: `url(${NightLayer4})`,
          backgroundPositionX: `${mousePosition.x * 70}px`, // Moves the most for parallax depth
        }}
      />
    </>
  );
};

export default NightLayers;
