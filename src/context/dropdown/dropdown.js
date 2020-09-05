import React, { createContext, useState } from 'react';

export const DropDownContext = createContext({
  toggle: false,
  handleClick: () => {},
});

const DropDownProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  // console.log(dropDown);

  return (
    <DropDownContext.Provider value={{ toggle, handleClick }}>
      {children}
    </DropDownContext.Provider>
  );
};

export default DropDownProvider;
