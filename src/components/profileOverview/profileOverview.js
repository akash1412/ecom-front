import React, { useRef, useEffect, useContext } from "react";
import { PseudoBox, Avatar, Box } from "@chakra-ui/core";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

import { DropDownContext } from "../../context/dropdown/dropdown";

import Greet from "../greet";
import avatar from "../../assets/icons/icons8-male-user.svg";
import DropDown from "../dropdown/dropdown";

const ProfileOverview = () => {
  const { toggle, handleClick, handleDropdownOutsideClick } = useContext(
    DropDownContext
  );

  const ref = useRef();

  const handleOutsideClickListener = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handleDropdownOutsideClick();
    } else {
      return null;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClickListener);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClickListener);
    };
  }, [ref, handleOutsideClickListener]);

  return (
    <Box position="relative" ref={ref}>
      <PseudoBox
        as="div"
        d="flex"
        alignItems="center"
        cursor="pointer"
        marginLeft="4rem"
        backgroundColor="#000"
        _active={{ backgroundColor: "#000" }}
        color="#fff"
        // padding="3px 3px"
        padding="1.5px"
        borderRadius="2rem"
        overflow="hidden"
        _hover={{ backgroundColor: "gray.50" }}
        onClick={handleClick}
      >
        <Avatar
          src={avatar}
          width={["1.8rem", "3rem", "3rem", "3rem"]}
          height={["1.8rem", "3rem", "3rem", "3rem"]}
        />
        <Greet px="2.5px" fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem"]} />
        <Box paddingX="4px">
          {toggle ? (
            <AiOutlineCaretUp fontSize={["1.2rem", "2rem", "2rem", "2rem"]} />
          ) : (
            <AiOutlineCaretDown fontSize={["1.2rem", "2rem", "2rem", "2rem"]} />
          )}
        </Box>
      </PseudoBox>

      {toggle && <DropDown />}
    </Box>
  );
};

export default ProfileOverview;
