import React from 'react';
import { Box } from '@chakra-ui/core';

// display: flex;

// align-items: center;
// padding: 0.2rem 0.5rem;
// border: 1px solid #dbd6d6;
// margin: 0.4rem 0;
const InputContainer = ({ children }) => (
  <Box
    display="flex"
    alignItems="center"
    padding="0.2rem 0.5rem"
    border="1px solid #dbd6d6"
    margin="0.4rem 0"
  >
    {children}
  </Box>
);

export default InputContainer;
