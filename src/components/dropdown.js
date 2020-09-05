import React, { useRef, useEffect } from 'react';

import { Box, Heading, Link } from '@chakra-ui/core';
import { FiSettings, FiUser } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';

const DropDown = ({ handleDropDownComponentClick }) => {
  const ref = useRef();

  const handleClick = (e) => {
    console.log(ref.current.contains(e.target));

    if (ref.current && !ref.current.contains(e.target)) {
      handleDropDownComponentClick();
    } else {
      // handleDropDownComponentClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref]);

  return (
    <Box
      marginTop="1.2rem"
      position="fixed"
      height="12rem"
      width="18rem"
      right="8rem"
      zIndex="2"
      backgroundColor="#1b262c"
      border="none"
      borderRadius="10px"
      color="#f5f5f5"
      boxShadow="0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.17);"
      padding="1.3rem"
      ref={ref}
      d="flex"
      justifyItems="space-between"
      flexWrap="wrap"
    >
      <Link
        backgroundColor="#b2d430"
        display="block"
        borderRadius="50%"
        width="3rem"
        height="3rem"
        padding="3px"
        color="#fff"
        marginRight="2.3rem"
        href="/profile"
      >
        <FiUser size="2.3rem" marginTop="1.5px" />
      </Link>
      <Link
        backgroundColor="#fe5f55"
        display="block"
        borderRadius="50%"
        width="3rem"
        height="3rem"
        padding="3px"
        color="#fff"
        marginRight="2.3rem"
        href="/profile/settings"
      >
        <FiSettings size="2.3rem" marginTop="1.5px" />
      </Link>
      <Link
        backgroundColor="#bf5caa"
        display="block"
        borderRadius="50%"
        width="3.2rem"
        height="3.2rem"
        padding="4px"
        paddingTop="5.5px"
        paddingLeft="5.1px"
        color="#fff"
        href="/profile/cart"
      >
        <AiOutlineShoppingCart size="2.15rem" marginTop="1.5px" />
      </Link>

      <Link
        backgroundColor="#fd0054"
        display="block"
        borderRadius="50%"
        width="3rem"
        height="3rem"
        padding="3px"
        marginRight="2.3rem"
        color="#fff"
        href="/profile/liked-products"
      >
        <AiOutlineHeart size="2.3rem" marginTop="1.5px" />
      </Link>
      <Link
        backgroundColor="#df8931"
        display="block"
        borderRadius="50%"
        width="3rem"
        height="3rem"
        padding="3px"
        color="#fff"
        href="/add-products"
      >
        <IoIosAddCircleOutline size="2.3rem" marginTop="1.5px" />
      </Link>
    </Box>
  );
};

export default DropDown;
