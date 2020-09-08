import React, { useState, useContext } from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import theme from './theme/theme';

import { Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/core';

import UserContextProvider from './context/userContext/userContext';
import CartContext from './context/cart-context/cart-context';
// import DropDownProvider from './context/dropdown/dropdown';
import ProductsContextProvider from './context/products/products-context';
// import { DropDownContext } from './context/dropdown/dropdown';

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar';
import DropDown from './components/dropdown';
import Cart from './components/cart/cart';

import Directory from './page/directory/directory';

function App() {
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDropDownComponentClick = () => {
    setToggle(false);
  };

  return (
    <UserContextProvider>
      <ProductsContextProvider>
        <CartContext>
          <ThemeProvider theme={theme}>
            <Navbar handleToggle={handleToggle} />

            <Box display="flex" minHeight="100vh" position="relative">
              <Sidebar />
              <Box flexGrow="1" marginTop="5rem" position="relative" zIndex="1">
                {toggle ? (
                  <DropDown
                    handleDropDownComponentClick={handleDropDownComponentClick}
                  />
                ) : null}

                <Route path="/" component={Directory} />
              </Box>
            </Box>
          </ThemeProvider>
        </CartContext>
      </ProductsContextProvider>
    </UserContextProvider>
  );
}

export default App;
