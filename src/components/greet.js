import React, { useContext } from "react";

import { Heading } from "@chakra-ui/core";

import { UserContext } from "../context/userContext/userContext";

const Greet = ({ px, fontSize }) => {
  const { userDetails } = useContext(UserContext);

  return (
    <Heading px={px} fontSize={fontSize}>
      Hello ,{userDetails.name}
    </Heading>
  );
};

export default Greet;
