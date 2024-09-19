import { useEffect, useState } from "react";

const ParallaxLayers: React.FC<{
  config: Array<{ backgroundImage: string; sensitivity: number }>;
}> = ({ config }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement and update position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX / window.innerWidth - 0.5, // Value between -0.5 and 0.5
        y: event.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Map over the config to generate layers */}
      {config.map((layer, index) => (
        <ParallaxLayers
          key={index}
          backgroundImage={layer.backgroundImage}
          sensitivity={layer.sensitivity}
          mousePosition={mousePosition}
        />
      ))}
    </>
  );
};

export default ParallaxLayers;
