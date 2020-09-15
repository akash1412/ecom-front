import React, { useContext } from "react";
import { RiMenu3Line } from "react-icons/ri";

import { Box } from "@chakra-ui/core";

import { SidebarContext } from "../../context/sidebar/sidebar-context";

const MenuIcon = () => {
  const { handleToggleClick } = useContext(SidebarContext);

  return (
    <Box
      marginLeft="1.2rem"
      cursor="pointer"
      onClick={handleToggleClick}
      d={["block", "block", "block", "none"]}
    >
      <RiMenu3Line color="#fff" size="2rem" />
    </Box>
  );
};

export default MenuIcon;
