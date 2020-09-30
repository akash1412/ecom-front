import React, { useContext } from "react";

import { Box } from "@chakra-ui/core";

import { modalContext } from ".././context/modal/modal-context";
const AuthPage = () => {
  const { toggleModal, open } = useContext(modalContext);

  const login = () => {
    return <div>login</div>;
  };

  const signup = () => {
    return <div>signup</div>;
  };

  return (
    <Box zIndex='10' width='44rem'>
      Modal
    </Box>
  );
};

export default AuthPage;
