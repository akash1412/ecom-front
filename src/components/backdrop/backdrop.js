import React, { useContext } from "react";

import { Box } from "@chakra-ui/core";

import { modalContext } from "../../context/modal/modal-context";

const Backdrop = () => {
  const { toggleModal, handleToggleClickFunc } = useContext(modalContext);

  return (
    <Box
      display={toggleModal ? "block" : "none"}
      position='absolute'
      top='0'
      left='0'
      backgroundColor='#00000040'
      minH='100%'
      minW='100%'
      zIndex='6'
      cursor='pointer'
      onClick={handleToggleClickFunc}>
      {"\u00A0"}
    </Box>
  );
};

export default Backdrop;
