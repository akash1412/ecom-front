import React, { useContext, useState } from "react";
import {
  Box,
  Heading,
  List,
  ListItem,
  Image,
  Link,
  Skeleton,
} from "@chakra-ui/core";

import "./sidebar.style.scss";

import { SidebarContext } from "../../context/sidebar/sidebar-context";
import Items from "../../utils/utils";

const Sidebar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  const [disIcon, setDisIcon] = useState(false);

  return (
    <Box
      width={["25rem", "25rem", "25rem", "25rem"]}
      height='100vh'
      className={toggleSidebar ? "openSidebar" : "closeSidebar"}
      transition='transform 0.3s'
      position={["fixed", "fixed", "fixed", "sticky"]}
      top='0'
      left='0'
      borderTopRightRadius='10px'
      borderBottomRightRadius='10px'
      backgroundColor='black.100'
      display='flex'
      flexDir='column'
      paddingY='1.2rem'
      pr='1.2rem'
      paddingLeft='2.5rem'
      zIndex='4'>
      <List paddingTop='2rem'>
        {Items.map(({ path, icon, name }) => (
          <ListItem key={name} marginBottom='2rem' cursor='pointer'>
            <Link
              href={path}
              d='flex'
              alignItems='center'
              style={{ textDecoration: "none" }}
              color='gray.50'
              _active={{ color: "#fff" }}
              _hover={{ color: "#fff" }}>
              <Skeleton colorStart='#000' colorEnd='#363434' isLoaded={disIcon}>
                <Image
                  src={icon}
                  size='2.5rem'
                  marginRight='1rem'
                  onLoad={() => setDisIcon(true)}
                />
              </Skeleton>
              <Heading size='lg' marginLeft='.6rem'>
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
