import React, { useState, useContext } from 'react';

import { Box, Image, Heading, Text, Skeleton, useToast } from '@chakra-ui/core';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsCaretUp } from 'react-icons/bs';

import { CartContext } from '../../context/cart-context/cart-context';

import CardDrawer from '../card-drawer/card-drawer';

const Card = ({ name, url, quantity, description, price, id }) => {
  const { handleAddToCartFunc } = useContext(CartContext);

  const [imageLoad, setImageLoad] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  const handleClick = async (product) => {
    await handleAddToCartFunc(product);
  };

  return (
    <Box
      key={id}
      backgroundColor="#000"
      color="#fff"
      d="flex"
      flexDir="column"
      width="100%"
      height="30rem"
      borderRadius="1.2rem"
      overflow="hidden"
      position="relative"
    >
      {/* Don't forget to add pagination */}
      <Skeleton
        width="100%"
        height="75%"
        colorStart="#fffbf3"
        colorEnd="#dfddc7"
        isLoaded={imageLoad}
      >
        <Image
          src={url}
          width="100%"
          height="100%"
          objectFit="cover"
          onLoad={() => setImageLoad(true)}
        />
      </Skeleton>
      <Box
        flexGrow="1"
        paddingX="1.2px"
        d="flex"
        flexDir="column"
        justifyContent="space-around"
        position="relative"
        paddingX=".8rem"
        paddingY=".6rem"
      >
        <Box>
          <Heading size="md">{name}</Heading>
        </Box>
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <Text
            fontWeight="fontWeight.500"
            fontSize="1.4rem"
          >{`$${price}`}</Text>

          <Box
            cursor="pointer"
            onClick={() => handleClick({ name, price, id, url })}
          >
            <IoIosAddCircleOutline size="2.4rem" />
          </Box>
          <Box cursor="pointer" onClick={handleToggleClick}>
            <BsCaretUp size="2rem" />
          </Box>
        </Box>
      </Box>
      <CardDrawer
        toggle={toggle}
        handleClick={handleToggleClick}
        description={description}
      />
    </Box>
  );
};

export default Card;
