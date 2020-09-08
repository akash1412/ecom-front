import React, { useContext } from 'react';

import { Box, useToast } from '@chakra-ui/core';
import { AiOutlineClose } from 'react-icons/ai';

import { CartContext } from '../../context/cart-context/cart-context';

const ShowToast = () => {
  const {} = useContext(CartContext);

  return (
    <Box
      width="200px"
      backgroundColor="#000"
      height="50px"
      position="absolute"
      bottom="2px"
      margin="0 auto"
      left="0"
      right="0"
      color="#fff"
      transition=".5s"
      opacity="0"
      visibility="hidden"
    >
      <Box>
        <AiOutlineClose size="1.7rem" />
      </Box>
    </Box>
  );
};

export default ShowToast;
