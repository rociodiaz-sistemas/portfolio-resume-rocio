import React from 'react';
import CVPaper from './CVPaper';
import { Box } from '@chakra-ui/react';
import { useCVBook, CVBookProvider } from '../../store/contexts/CVBookContext';

const CVBook: React.FC = () => {
  const pageSets = [
    { left: <div>Left Page 1 Content</div>, right: <div>Right Page 1 Content</div> },
    { left: <div>Left Page 2 Content</div>, right: <div>Right Page 2 Content</div> },
    { left: <div>Left Page 3 Content</div>, right: <div>Right Page 3 Content</div> },
  ];

  return (
    // Ensure that 'totalSets' is passed to CVBookProvider
    <CVBookProvider totalSets={pageSets.length}>
      <CVBookNavigation pageSets={pageSets} />
    </CVBookProvider>
  );
};

// Navigation component to handle page navigation
const CVBookNavigation: React.FC<{ pageSets: any[] }> = ({ pageSets }) => {
  const { currentPageSet } = useCVBook();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <CVPaper>
        {pageSets[currentPageSet].left}
        {pageSets[currentPageSet].right}
      </CVPaper>
    </Box>
  );
};

export default CVBook;
