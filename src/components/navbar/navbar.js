import React from 'react';

import { Box, Heading, PseudoBox, Link, Avatar } from '@chakra-ui/core';
import { AiOutlineCaretDown } from 'react-icons/ai';

import SearchBar from '../searchbar';

import avatar from '../../assets/icons/icons8-male-user.svg';
import Logo from '../logo/logo';
import Greet from '../greet';
import CartItemCount from '../cart-item-count/cart-item-count';

const Navbar = ({ handleToggle }) => {
  return (
    <Box
      position="fixed"
      top="0"
      zIndex="2"
      backgroundColor="offwhite.100"
      display="flex"
      marginX="5 5"
      paddingX="20px"
      color="gray.50"
      height="5rem"
      width="100%"
    >
      <Box flexBasis="15%" display="flex">
        <Logo />
      </Box>
      <SearchBar />
      <Box
        flexBasis="45%"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <CartItemCount />
        <PseudoBox
          as="div"
          d="flex"
          alignItems="center"
          cursor="pointer"
          marginLeft="4rem"
          backgroundColor="#000"
          color="#fff"
          // padding="3px 3px"
          padding="1.5px"
          borderRadius="2rem"
          overflow="hidden"
          _hover={{ opacity: '0.6' }}
          onClick={handleToggle}
        >
          <Avatar src={avatar} fontSize="1px" />
          <Greet paddingX="2.5px" size="md" />
          <Box paddingX="4px">
            <AiOutlineCaretDown size="1.4rem" />
          </Box>
        </PseudoBox>

        <Box d="flex" paddingLeft="8px">
          <Link
            borderRadius="2rem"
            textDecoration="none"
            backgroundColor="#000"
            padding="8px 10px"
            href="/login"
            color="#fff"
            marginRight="7px"
          >
            <Heading size="md">login</Heading>
          </Link>
          <Link
            borderRadius="2rem"
            textDecoration="none"
            backgroundColor="#000"
            padding="8px 10px"
            href="/signup"
            color="#fff"
          >
            <Heading size="md">signup</Heading>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
