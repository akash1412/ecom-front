import React from "react";

import { Box } from "@chakra-ui/core";

import DropDownProvider from "../../context/dropdown/dropdown";

import ProfileOverview from "../profileOverview/profileOverview";

import Logo from "../logo/logo";

import MenuIcon from "../menu-icon/menu-icon";

const Navbar = () => {
  return (
    <Box
      position='fixed'
      top='0'
      zIndex='2'
      backgroundColor='transparent'
      display='flex'
      paddingX={["10px", "20px", "20px", "20px"]}
      color='gray.50'
      height='5rem'
      width='100%'>
      <Logo />

      <Box
        marginLeft='auto'
        display='flex'
        justifyContent='flex-end'
        alignItems='center'>
        <DropDownProvider>
          <ProfileOverview />
        </DropDownProvider>

        <MenuIcon />
      </Box>
    </Box>
  );
};

export default Navbar;
