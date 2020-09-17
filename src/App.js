import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import theme from "./theme/theme";

import { Box } from "@chakra-ui/core";

import UserContextProvider from "./context/userContext/userContext";
import CartContext from "./context/cart-context/cart-context";
import ProductsContextProvider from "./context/products/products-context";
import SidebarContextProvider from "./context/sidebar/sidebar-context";

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

import Directory from "./page/directory/directory";

function App() {
  return (
    <UserContextProvider>
      <ProductsContextProvider>
        <CartContext>
          <SidebarContextProvider>
            <ThemeProvider theme={theme}>
              <Navbar />
              <Box display="flex" position="relative" marginTop="5rem">
                <Sidebar />

                <Box
                  flexGrow="1"
                  // marginTop="5rem"
                  position="relative"
                  zIndex="1"
                >
                  <Switch>
                    <Route path="/" component={Directory} />
                  </Switch>
                </Box>
              </Box>
            </ThemeProvider>
          </SidebarContextProvider>
        </CartContext>
      </ProductsContextProvider>
    </UserContextProvider>
  );
}

export default App;
