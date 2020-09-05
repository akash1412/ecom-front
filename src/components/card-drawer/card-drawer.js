import React from 'react';
import { Box, Text, Button, Select } from '@chakra-ui/core';
import { BsCaretDown } from 'react-icons/bs';

const options = [1, 2, 3, 5, 7];

const DrawerAddToCartAndQuantitySelectOption = () => (
  <Box d="flex" justifyContent="space-around">
    <Select color="gray.50" marginRight="auto" width="40px">
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </Select>
    <Button
      border="none"
      padding="1.1rem 1.5rem"
      borderRadius="1.2rem"
      backgroundColor="#fff"
    >
      Add to cart
    </Button>
  </Box>
);

const CardDrawer = ({ handleClick, description, toggle }) => {
  return (
    <Box
      backgroundImage="linear-gradient(to bottom, rgba(0,0,0,.75) , rgba(0,0,0,1)) "
      width="100%"
      height={toggle ? '100%' : '0'}
      transition=" 0.4s cubic-bezier(0.65, 0, 0.35, 1)"
      visibility={toggle ? 'unset' : 'hidden'}
      opacity={toggle ? '1' : '0'}
      transformOrigin="center"
      overflow="hidden"
      position="absolute"
      bottom="0"
      left="0"
      zIndex="3"
      padding={toggle ? '1.5rem' : '0'}
      display="flex"
      flexDir="column"
    >
      <Box alignSelf="flex-end" marginBottom="3rem">
        <BsCaretDown cursor="pointer" size="2rem" onClick={handleClick} />
      </Box>
      <Box
        flexGrow="1"
        d="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text fontSize="1.2rem" textAlign="center">
          {description}
        </Text>
        <DrawerAddToCartAndQuantitySelectOption />
      </Box>
    </Box>
  );
};

export default CardDrawer;
