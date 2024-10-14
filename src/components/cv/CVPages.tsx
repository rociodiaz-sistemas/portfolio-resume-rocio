import React from 'react';
import { Box } from '@chakra-ui/react';
import CVPaper from './cv-paper/CVPaper';

interface CVPageProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const CVPages: React.FC<{ pages: CVPageProps[] }> = ({ pages }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" overflowY="auto" maxHeight="90vh">
      {pages.map((page, index) => (
        <CVPaper key={index}>
          {/* Left content for this page */}
          <Box padding="10px">{page.leftContent}</Box>

          {/* Right content for this page */}
          <Box padding="10px">{page.rightContent}</Box>
        </CVPaper>
      ))}
    </Box>
  );
};

export default CVPages;
