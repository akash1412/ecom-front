import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import { addToCartFunc, removeItemFromCart } from '../../utils/utils';

export const CartContext = createContext({
  cartItems: [],
  cartItemCount: 0,
  toggleCart: false,
  handleAddToCartFunc: () => {},
});

const CartContextProvider = ({ children }) => {
  const token = localStorage.getItem('jwt');

  const [cartItems, setCartItems] = useState([]);

  const [toggleCart, setToggleCart] = useState(false);

  const [cartItemCount, setCartItemCount] = useState(0);

  const getCartItemsFunc = async () => {
    const response = await axios({
      url: 'http://localhost:82/api/v1/cart',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    setCartItems([...response.data.data.cartItems]);
  };

  useEffect(() => {
    getCartItemsFunc();
  }, []);

  useEffect(() => {
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    setCartItemCount(count);
  });

  const handleAddToCartFunc = async ({ id: productId, url, ...detail }) => {
    const values = addToCartFunc(
      { ...detail, imgUrl: url, productId },
      cartItems
    );

    setCartItems([...values]);
    try {
      const response = await axios({
        url: `http://localhost:82/api/v1/cart/${productId}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { ...detail, imgUrl: url, productId },
      });

      console.log(response);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleRemoveItemFromCart = async (cartItemToRemove) => {
    setCartItems([...removeItemFromCart(cartItemToRemove, cartItems)]);

    try {
      await axios({
        url: `http://localhost:82/api/v1/cart/${cartItemToRemove.productId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleToggleCartFunc = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemCount,
        getCartItemsFunc,
        handleAddToCartFunc,
        toggleCart,
        handleToggleCartFunc,
        handleRemoveItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
