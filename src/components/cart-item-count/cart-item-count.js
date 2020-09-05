import React from 'react';
import { Box, Text } from '@chakra-ui/core';
import { BsBag } from 'react-icons/bs';

const CartItemCount = () => (
  <Box d="flex" alignItems="center" position="relative" cursor="pointer">
    <BsBag size="2.3rem" />
    <Text
      position="absolute"
      top="0.6rem"
      left="0.8rem"
      fontSize="1.2rem"
      fontWeight="500"
    >
      2
    </Text>
  </Box>
);

export default CartItemCount;
