import React, { useState, createContext } from "react";

export const modalContext = createContext({
  toggleModal: false,
  open: "",
  handleToggleClickFunc: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const [open, setOpen] = useState("");

  const handleToggleClickFunc = (modalOpt) => {
    setToggleModal(!toggleModal);

    setOpen(modalOpt);
  };

  return (
    <modalContext.Provider value={{ toggleModal, handleToggleClickFunc, open }}>
      {children}
    </modalContext.Provider>
  );
};

export default ModalContextProvider;
