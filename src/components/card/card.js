import React, { useState } from 'react';
import { Box, Image, Heading, Text, Skeleton } from '@chakra-ui/core';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsCaretUp, BsCaretDown } from 'react-icons/bs';

import axios from '../../API/API';

import CardDrawer from '../card-drawer/card-drawer';

const Card = ({ name, url, quantity, description, price, id }) => {
  const [imageLoad, setImageLoad] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  const handleClick = async (product) => {
    console.log(product);
    const { id: productId, ...detail } = product;

    try {
      await axios({
        url: '/cart',
        params: {
          productId,
        },

        data: { ...detail },
      });
    } catch (error) {
      console.log(error.response.data);
    }
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
            onClick={() => handleClick({ name, price, id })}
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
