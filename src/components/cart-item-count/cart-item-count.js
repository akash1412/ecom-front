import React, { useContext } from 'react';
import { Box, Text, Link } from '@chakra-ui/core';
import { BsBag } from 'react-icons/bs';

import { CartContext } from '../../context/cart-context/cart-context';

const CartItemCount = () => {
  const { cartItemCount, handleToggleCartFunc } = useContext(CartContext);

  return (
    <Box
      d="flex"
      alignItems="center"
      position="relative"
      cursor="pointer"
      color="gray.50"
      onClick={handleToggleCartFunc}
    >
      <BsBag size="2.3rem" />
      <Text
        position="absolute"
        top="0.6rem"
        left="0.8rem"
        fontSize="1.2rem"
        fontWeight="500"
      >
        {cartItemCount}
      </Text>
    </Box>
  );
};

export default CartItemCount;
