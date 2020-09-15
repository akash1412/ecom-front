import React, { createContext, useState } from "react";

export const DropDownContext = createContext({
  toggle: false,
  handleClick: () => {},
  handleDropdownOutsideClick: () => {},
});

const DropDownProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleDropdownOutsideClick = () => {
    setToggle(false);
  };

  // console.log(dropDown);

  return (
    <DropDownContext.Provider
      value={{ toggle, handleClick, handleDropdownOutsideClick }}
    >
      {children}
    </DropDownContext.Provider>
  );
};

export default DropDownProvider;
