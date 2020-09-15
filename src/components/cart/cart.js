import React, { useContext } from 'react';
import { Box, Heading, Image, Text, Button } from '@chakra-ui/core';
import { FiShoppingCart } from 'react-icons/fi';

import { TiDeleteOutline } from 'react-icons/ti';

import ShoppingCart from '../../assets/icons/icons8-add-shopping-cart.svg';

import { CartContext } from '../../context/cart-context/cart-context';

const Header = () => {
  return (
    <Box
      d="flex"
      justifyContent="center"
      padding=".7rem 0 1.7rem 0"
      color="gray.50"
      borderBottom="1px solid #ccc"
    >
      <FiShoppingCart size="2.25rem" />
      <Heading marginLeft="1.4rem" fontSize="1.8rem" fontWeight="550">
        Cart Items
      </Heading>
    </Box>
  );
};

const NoCartItemPresent = () => (
  <Box width="100%" height="100%" d="flex" flexDir="column" alignItems="center">
    <Box d="flex" justifyContent="center" alignItems="center">
      <Image src={ShoppingCart} />
      <Heading fontSize="2.6rem" color="gray.50" marginLeft="1.3rem">
        0 items
      </Heading>
    </Box>
    <Box d="inline-block" marginTop="1.2rem" borderBottom="1px solid #ccc">
      <Heading textAlign="center">shop now</Heading>
    </Box>
    more Buttons will be added
  </Box>
);

// const spinner = () => {
//   return (
//     <Box
//       position="absolute"
//       top="50%"
//       left="50%"
//       transform="translate(-50%,-50%)"
//     >
//       <Spinner
//         width="4rem"
//         height="4rem"
//         thickness="3px"
//         speed="0.65s"
//         emptyColor="#d9dad7"
//         color="#333644"
//         size="xl"
//       />
//     </Box>
//   );
// };

const Cart = () => {
  const { cartItems, handleRemoveItemFromCart } = useContext(CartContext);

  return (
    <Box
      width="35rem"
      backgroundColor="white"
      height="32rem"
      pos="fixed"
      zIndex="3"
      right="32rem"
      borderRadius="1.2rem"
      padding="1.2rem"
      paddingBottom=".6rem"
      overflowY="scroll"
      d="flex"
      flexDir="column"
      boxShadow="0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.17);"
    >
      <Box height="100%" width="100%" pos="relative">
        {cartItems.length === 0 ? (
          <NoCartItemPresent />
        ) : (
          <>
            <Header />
            <Box paddingTop="1.4rem" d="flex" flexDir="column">
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  d="flex"
                  justifyContent="space-between"
                  marginBottom="1.6rem"
                >
                  <Box width="24%" height="4.9rem" borderRadius=".9rem">
                    <Image
                      src={item.imgUrl}
                      width="100%"
                      height="100%"
                      borderRadius=".9rem"
                      objectFit="cover"
                    />
                  </Box>
                  <Box d="flex" alignItems="center" paddingX="0.8rem">
                    <Heading fontSize="1.4rem" fontWeight="550">
                      {item.name}
                    </Heading>
                    <Text fontSize="1.4rem" marginLeft="4rem">
                      {item.quantity}
                    </Text>
                    <Box
                      marginLeft="2rem"
                      marginTop="0.4rem"
                      onClick={() => handleRemoveItemFromCart(item)}
                    >
                      <TiDeleteOutline size="1.6rem" />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}
        {/* <Box
          // position="fixed"
          // bottom="0"
          // zIndex="3"
          backgroundColor="#000"
          d="flex"
          justifyContent="center"
          alignItems="center"
          paddingY="1.2rem"
          paddingX="1.1rem"
          borderRadius="1.2rem"
          boxShadow=" -1px -4px 5px 0px rgba(0,0,0,0.2);"
        >
          <Button
            width="100%"
            outline="none"
            border="none"
            backgroundColor="transparent"
          >
            Go to Checkout
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Cart;
