import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./theme/theme";

import UserContextProvider from "./context/userContext/userContext";
import CartContext from "./context/cart-context/cart-context";
import ProductsContextProvider from "./context/products/products-context";
import SidebarContextProvider from "./context/sidebar/sidebar-context";

import Backdrop from "./components/backdrop/backdrop";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Container from "./components/container/container";
import MainWrapper from "./components/main-wrapper/main-wrapper";
import AuthModal from "./components/auth-modal/auth-modal";

import Directory from "./page/directory/directory";
import ModalContextProvider from "./context/modal/modal-context";

function App() {
  return (
    <UserContextProvider>
      <ProductsContextProvider>
        <CartContext>
          <ModalContextProvider>
            <SidebarContextProvider>
              <ThemeProvider theme={theme}>
                <CSSReset />

                <Backdrop />

                <AuthModal>
                  <Navbar />
                  <Container>
                    <Sidebar />

                    <MainWrapper>
                      <Switch>
                        <Route path='/' component={Directory} />
                      </Switch>
                    </MainWrapper>
                  </Container>
                </AuthModal>
              </ThemeProvider>
            </SidebarContextProvider>
          </ModalContextProvider>
        </CartContext>
      </ProductsContextProvider>
    </UserContextProvider>
  );
}

export default App;

// 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'
