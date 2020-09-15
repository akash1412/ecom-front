import React, { useContext } from "react";

import { Heading } from "@chakra-ui/core";

import { UserContext } from "../context/userContext/userContext";

const Greet = () => {
  const { userDetails } = useContext(UserContext);

  return (
    <Heading paddingX="2.5px" fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem"]}>
      Hello ,{userDetails.name}
    </Heading>
  );
};

export default Greet;
