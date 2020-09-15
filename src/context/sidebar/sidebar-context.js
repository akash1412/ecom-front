import React, { createContext, useState } from 'react';

export const SidebarContext = createContext({
  toggleSidebar: false,
  handleToggleClick: () => {},
});

const SidebarContextProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleClick = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <SidebarContext.Provider value={{ toggleSidebar, handleToggleClick }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
