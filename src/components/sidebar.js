import React, { useState } from 'react';
import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Image,
  Link,
  Skeleton,
} from '@chakra-ui/core';

import Items from '../utils/utils';

const Sidebar = () => {
  const [display, setDisplay] = useState(false);

  return (
    <Box
      width="18%"
      height="calc(100vh - 5rem)"
      top="5rem"
      left="0"
      backgroundColor="white.100"
      position="sticky"
      borderTopRightRadius="10px"
      borderBottomRightRadius="10px"
      display="flex"
      flexDir="column"
      paddingY="1.2rem"
      paddingLeft="2.5rem"
    >
      <Heading size="2xl"> Explore</Heading>
      <List paddingTop="2rem">
        {Items.map(({ path, icon, name }) => (
          <ListItem marginBottom="2rem" cursor="pointer" key={name}>
            <Link
              href={path}
              d="flex"
              alignItems="center"
              style={{ textDecoration: 'none' }}
              color="gray.50"
              _active={{ color: 'gray.50' }}
            >
              <Skeleton colorStart="#000" colorEnd="#363434" isLoaded={display}>
                <Image
                  src={icon}
                  size="2.5rem"
                  marginRight="1rem"
                  onLoad={() => setDisplay(true)}
                />
              </Skeleton>
              <Heading size="lg" marginLeft=".6rem">
                {name}
              </Heading>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
