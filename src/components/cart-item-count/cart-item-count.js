import React, { useContext } from "react";
import { Box, Text, Link } from "@chakra-ui/core";
import { BsBag } from "react-icons/bs";

import { CartContext } from "../../context/cart-context/cart-context";

const CartItemCount = () => {
  const { cartItemCount, handleToggleCartFunc } = useContext(CartContext);

  return (
    <Box
      backgroundColor="#fff"
      d="flex"
      alignItems="center"
      position="relative"
      cursor="pointer"
      color="gray.50"
      onClick={handleToggleCartFunc}
    >
      {/* <BsBag
         
        // fontSize={["1rem", "2.3rem", "2.3rem", "2.3rem"]}
      /> */}
      <Box as={BsBag} size={["1.8rem", "2.3rem", "2.3rem", "2.3rem"]} />
      <Text
        position="absolute"
        top={["0.45rem", "0.6rem", "0.6rem", "0.6rem"]}
        left={[".6rem", ".8rem", ".8rem", ".8rem"]}
        fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem"]}
        fontWeight="500"
      >
        {cartItemCount}
      </Text>
    </Box>
  );
};

export default CartItemCount;
