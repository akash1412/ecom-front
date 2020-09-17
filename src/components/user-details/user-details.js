import React from "react";

import { Box, Heading } from "@chakra-ui/core";

import EditableDetails from "../editable/editable";

import Greet from "../greet";

const UserDetails = () => {
  return (
    <Box p=" 1.5rem" d="flex" flexDir="column">
      <Box d="flex">
        <Greet fontSize={["1.4rem", "1.4rem", "2rem", "3rem"]} />
        <Box fontSize="3rem">👋</Box>
      </Box>

      <Box>
        <EditableDetails />
      </Box>
    </Box>
  );
};

export default UserDetails;
