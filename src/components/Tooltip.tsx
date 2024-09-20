import React, { useState, useEffect } from "react";
import Sign from "../assets/Paper UI/Paper/Header2.png"; // Default image
import { MODALS_AND_TOOLTIPS_INDEX } from "../utils/zindexes";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  imageSrc?: string; // Optional imageSrc prop, with a default
};

const Tooltip: React.FC<TooltipProps> = ({ content, children, imageSrc }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Time for which the tooltip will be visible

      return () => clearTimeout(timer); // Cleanup timer if the component unmounts or isVisible changes
    }
  }, [isVisible]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* The element that will trigger the tooltip */}
      <div onClick={showTooltip}>{children}</div>

      {/* Tooltip content with default or passed image background */}
      {isVisible && (
        <div
          style={{
            fontFamily: "'rainyhearts', sans-serif",
            position: "absolute",
            width: "170px", // Adjust width as needed
            height: "200px", // Adjust height as needed
            backgroundImage: `url(${imageSrc || Sign})`, // Default to your image if none is passed
            backgroundSize: "contain", // Ensure the image is scaled to fit within the tooltip
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", // Center the image within the tooltip
            color: "black",
            padding: "18px",
            borderRadius: "5px",
            top: "0px", // Tooltip appears below the element
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
            zIndex: MODALS_AND_TOOLTIPS_INDEX,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
