// AnimationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextProps {
  collapsed: boolean;
  showPolaroid: boolean;
  hidePolaroid: boolean;
  toggleCollapse: () => void;
  paperPositionX: string;
}

const AnimationContext = createContext<AnimationContextProps | undefined>(
  undefined
);

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [showPolaroid, setShowPolaroid] = useState(false);
  const [hidePolaroid, setHidePolaroid] = useState(false);

  const toggleCollapse = () => {
    if (collapsed) {
      setHidePolaroid(true);
      setTimeout(() => {
        setCollapsed(false);
        setShowPolaroid(false);
        setHidePolaroid(false);
      }, 100);
    } else {
      setCollapsed(true);
      setShowPolaroid(true);
    }
  };

  const paperPositionX = collapsed ? "-25%" : "0";

  return (
    <AnimationContext.Provider
      value={{
        collapsed,
        showPolaroid,
        hidePolaroid,
        toggleCollapse,
        paperPositionX,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationContext must be used within an AnimationProvider"
    );
  }
  return context;
};
