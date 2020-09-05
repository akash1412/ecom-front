import React, { useRef, useEffect } from 'react';
import { PseudoBox, Avatar, Box } from '@chakra-ui/core';
import { AiOutlineCaretDown } from 'react-icons/ai';

const ProfileOverview = ({ handleToggle }) => {
  const ref = useRef();

  console.log(ref.current);
  useEffect(() => {
    console.log('profile');
  });

  return (
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
      _hover={{ backgroundColor: 'gray.50' }}
      onClick={handleToggle}
      ref={ref}
    >
      <Avatar src={avatar} fontSize="1px" />
      <Greet paddingX="2.5px" size="md" />
      <Box paddingX="4px">
        <AiOutlineCaretDown size="1.4rem" />
      </Box>
    </PseudoBox>
  );
};

export default ProfileOverview;
