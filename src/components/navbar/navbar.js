import React from "react";

import { Box, Heading, Link } from "@chakra-ui/core";

import SearchBar from "../searchbar";

import DropDownProvider from "../../context/dropdown/dropdown";

import ProfileOverview from "../profileOverview/profileOverview";

import Logo from "../logo/logo";

import CartItemCount from "../cart-item-count/cart-item-count";
import MenuIcon from "../menu-icon/menu-icon";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      top="0"
      zIndex="2"
      backgroundColor="gray.50"
      display="flex"
      marginX="5 5"
      paddingX={["10px", "20px", "20px", "20px"]}
      color="gray.50"
      height="5rem"
      width="100%"
    >
      {/* <Box flexBasis="15%" display="flex"> */}
      <Logo />
      {/* </Box> */}
      {/* <SearchBar /> */}
      <Box
        marginLeft="auto"
        // flexBasis="45%"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        {/* <CartItemCount /> */}

        <DropDownProvider>
          <ProfileOverview />
        </DropDownProvider>

        {/* <AuthLink /> */}
        <MenuIcon />
      </Box>
    </Box>
  );
};

export default Navbar;
