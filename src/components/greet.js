import React, { useContext } from 'react';

import { Heading } from '@chakra-ui/core';

import { UserContext } from '../context/userContext/userContext';

const Greet = ({ paddingX, size }) => {
  const { userDetails } = useContext(UserContext);

  return (
    <Heading paddingX={paddingX} size={size}>
      Hello ,{userDetails.name}
    </Heading>
  );
};

export default Greet;
