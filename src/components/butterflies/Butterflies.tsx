import React from "react";
import SpriteAnimation from "../SpriteAnimation";
import butterflyImages from "./assets/butterflymapping"; // Import your images

const butterfliesData = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  top: Math.random() * 100,
  left: Math.random() * 100,
  opacity: Math.random() * 0.5 + 0.5,
  src: Object.values(butterflyImages)[
    index % Object.values(butterflyImages).length
  ], // Randomly pick a sprite sheet
  frameCount: 3, // Number of frames in each sprite sheet
  frameWidth: 64, // Width of each frame, adjust to match your sprite sheets
  frameHeight: 64, // Height of each frame, adjust to match your sprite sheets
}));

const Butterflies: React.FC = () => {
  return (
    <>
      {butterfliesData.map((butterfly) => (
        <SpriteAnimation
          key={butterfly.id}
          top={butterfly.top}
          left={butterfly.left}
          opacity={butterfly.opacity}
          src={butterfly.src}
          frameCount={butterfly.frameCount}
          frameWidth={butterfly.frameWidth}
          frameHeight={butterfly.frameHeight}
        />
      ))}
    </>
  );
};

export default Butterflies;
