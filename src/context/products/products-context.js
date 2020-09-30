import React, { useState, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext([]);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleFetch = async (category) => {
    try {
      const response = await axios({
        url: `http://localhost:5000/api/v1/shop/s/${category}`,
        method: "GET",
      });

      setProducts([...response.data.data.products]);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  return (
    <ProductContext.Provider value={{ products, handleFetch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
