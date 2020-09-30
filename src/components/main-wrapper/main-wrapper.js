import React from "react";
import { Box } from "@chakra-ui/core";

const MainWrapper = ({ children }) => (
  <Box
    flexGrow='1'
    minHeight='calc(100vh - 5rem)'
    marginTop='5rem'
    position='relative'
    paddingX='3rem'
    zIndex='1'
    d='flex'>
    {children}
  </Box>
);

export default MainWrapper;
