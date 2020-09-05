import React, { useState, useContext } from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import theme from './theme/theme';

import { Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/core';

import UserContextProvider from './context/userContext/userContext';
// import DropDownProvider from './context/dropdown/dropdown';
import ProductsContextProvider from './context/products/products-context';
// import { DropDownContext } from './context/dropdown/dropdown';

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar';
import DropDown from './components/dropdown';

import ProfilePage from './page/profilepage/profilepage';
import HomePage from './page/homepage/homepage';
import Collection from './page/collection/collection';
import LoginPage from './page/login/login';
import SignUpPage from './page/sign-up-page/sign-up-page';
import AddProducts from './page/add-products/add-products';

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
              <Switch>
                <Route exact path="/" component={HomePage} />

                <Route path="/shop/:category" component={Collection} />

                <Route path="/profile" component={ProfilePage} />

                <Route path="/login" component={LoginPage} />

                {!user ? <Route path="/signup" component={SignUpPage} /> : null}

                <Route path="/add-products" component={AddProducts} />
              </Switch>
            </Box>
          </Box>
        </ThemeProvider>
      </ProductsContextProvider>
    </UserContextProvider>
  );
}

export default App;
