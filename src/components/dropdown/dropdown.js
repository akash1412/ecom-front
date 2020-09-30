import React, { useContext, useRef } from "react";

import { Box, Link, PseudoBox } from "@chakra-ui/core";

import { dropDownIcons } from "../../utils/utils";
import { modalContext } from "../../context/modal/modal-context";

const token = localStorage.getItem("jwt");

const AuthLink = () => {
  const { handleToggleClickFunc } = useContext(modalContext);
  const loginRef = useRef();
  const signupRef = useRef();

  return (
    <Box
      marginTop={["1.8rem", "1.2rem", "1.2rem", "1.2rem"]}
      position='fixed'
      height={["10rem", "12rem", "12rem", "8rem"]}
      width={["15rem", "18rem", "18rem", "15rem"]}
      right={["2rem", "8rem", "8rem", "8rem"]}
      p='.5rem'
      zIndex='10'
      backgroundColor='#1c1124'
      border='none'
      borderRadius='10px'
      color='#f5f5f5'
      boxShadow='0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.17);'
      d='flex'
      flexDir='column'>
      <PseudoBox
        as='div'
        onClick={() => {
          handleToggleClickFunc(loginRef.current.innerText);
        }}
        ref={loginRef}
        flex='1'
        p='.7rem'
        borderRadius='1.1rem'
        _hover={{ backgroundColor: "rgba(255,255,255,.1)", color: "#fff" }}>
        <Link
          h='100%'
          d='block'
          fontSize='1.5rem'
          color='#fff'
          _active={{ color: "#fff" }}
          _hover={{ color: "gray.20" }}>
          login
        </Link>
      </PseudoBox>
      <PseudoBox
        as='div'
        onClick={() => {
          handleToggleClickFunc(signupRef.current.innerText);
        }}
        ref={signupRef}
        p=' .7rem'
        flex='1'
        borderRadius='1.1rem'
        _hover={{ backgroundColor: "rgba(255,255,255,.1)" }}>
        <Link
          h='100%'
          d='block'
          fontSize='1.5rem'
          color='#fff'
          _active={{ color: "#fff" }}
          _hover={{ color: "gray.20" }}>
          Sign Up
        </Link>
      </PseudoBox>
    </Box>
  );
};

const UserOptions = () => (
  <Box
    marginTop={["1.8rem", "1.2rem", "1.2rem", "1.2rem"]}
    position='fixed'
    height={["10rem", "12rem", "12rem", "12rem"]}
    width={["15rem", "18rem", "18rem", "18rem"]}
    right={["2rem", "8rem", "8rem", "8rem"]}
    zIndex='10'
    backgroundColor='#1c1124'
    border='none'
    borderRadius='10px'
    color='#f5f5f5'
    boxShadow='0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.17);'
    padding={token ? "1.3rem" : "0.8rem"}
    d='grid'
    gridTemplateColumns={token ? "repeat(3,1fr)" : "1fr"}
    gridTemplateRows='repeat(2,1fr)'
    gridGap={!token ? "2px" : null}
    alignItems={token ? "center" : ""}
    justifyItems={token ? "center" : ""}>
    {dropDownIcons.map(({ icon, path, bgColor }) => (
      <Link
        backgroundColor={bgColor}
        display='block'
        pos='relative'
        borderRadius='50%'
        width='3rem'
        width={["2.3rem", "3rem", "3rem", "3rem"]}
        height={["2.3rem", "3rem", "3rem", "3rem"]}
        padding='3px'
        padding={["2px", "3px", "3px", "3px"]}
        color='#fff'
        href={path}>
        <Box
          pos='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%,-50%)'
          as={icon}
          size={["1.7rem", "2.1rem", "2.1rem", "2.1rem"]}
        />
      </Link>
    ))}
  </Box>
);

const DropDown = () => {
  if (!token) {
    return <AuthLink />;
  }

  return <UserOptions />;
};

export default DropDown;
