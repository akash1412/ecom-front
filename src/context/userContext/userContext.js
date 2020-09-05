import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({
  name: '',
  photo: '',
  setUser: () => {},
});

const UserContextProvider = ({ children }) => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userDetails'));

    if (user) {
      const { name, email } = user;
      setUserDetails({ ...userDetails, name, email });
    }

    console.log(user);
  }, []);

  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: '',
    photo: '',
  });

  const setUser = (userObj) => {
    const { name, email, photo } = userObj;

    setUserDetails({ ...userDetails, name, email });

    localStorage.setItem('userDetails', JSON.stringify({ name, email, photo }));

    console.log(userObj);
  };

  return (
    <UserContext.Provider value={{ setUser, userDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
