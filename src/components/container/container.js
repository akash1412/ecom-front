import React from "react";

import { Box } from "@chakra-ui/core";

const Container = ({ children }) => (
  <Box display='flex' position='relative'>
    {children}
  </Box>
);

export default Container;
