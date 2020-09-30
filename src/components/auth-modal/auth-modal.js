import React, { useContext } from "react";

import { Box } from "@chakra-ui/core";

import { modalContext } from "../../context/modal/modal-context";

import Login from "../login/login";
import Signup from "../sign-up/sign-up";

const AuthModal = ({ children }) => {
  const { toggleModal, open } = useContext(modalContext);

  return (
    <>
      {toggleModal ? (
        <Box
          zIndex='10'
          width='44rem'
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%,-50%)'
          backgroundColor='#fff'>
          <Box p='1.2rem 2.5rem' d='flex' flexDir='column' alignItems='center'>
            {open === "login" ? <Login /> : <Signup />}
          </Box>
        </Box>
      ) : null}

      {children}
    </>
  );
};

export default AuthModal;
