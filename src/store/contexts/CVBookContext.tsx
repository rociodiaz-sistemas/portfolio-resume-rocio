import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type properly
interface CVBookContextType {
  currentPageSet: number;
  totalSets: number;
  nextSet: () => void;
  prevSet: () => void; // Ensure prevSet is included here
  isFirstSet: boolean; // Add a new property to check if the current set is the first
  isLastSet: boolean; // Add a new property to check if the current set is the last
}

// Create the context with a default undefined value
const CVBookContext = createContext<CVBookContextType | undefined>(undefined);

// Custom hook to use the CVBook context
export const useCVBook = () => {
  const context = useContext(CVBookContext);
  if (!context) {
    throw new Error('useCVBook must be used within a CVBookProvider');
  }
  return context;
};

// Provider component that holds the navigation logic for sets of pages
export const CVBookProvider: React.FC<{ children: ReactNode; totalSets: number }> = ({ children, totalSets }) => {
  const [currentPageSet, setCurrentPageSet] = useState(0);
  const isFirstSet = currentPageSet === 0;
    const isLastSet = currentPageSet === totalSets - 1;

  const nextSet = () => {
    if (currentPageSet < totalSets - 1) {
      setCurrentPageSet(currentPageSet + 1);
    }
  };

  const prevSet = () => {
    if (currentPageSet > 0) {
      setCurrentPageSet(currentPageSet - 1);
    }
  };

  return (
    <CVBookContext.Provider value={{ currentPageSet, totalSets, nextSet, prevSet, isFirstSet, isLastSet}}>
      {children}
    </CVBookContext.Provider>
  );
};
