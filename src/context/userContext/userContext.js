import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  name: "",
  email: null,
  photo: null,
  role: null,
  setUser: () => {},
});

const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: null,
    photo: null,
    role: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));

    if (user) {
      const { name, email } = user;
      setUserDetails({ ...userDetails, name, email });
    }

    console.log(user);
  }, [userDetails]);

  const setUser = (userObj) => {
    const { name, email, photo, role } = userObj;

    setUserDetails({ ...userDetails, name, email, role });

    localStorage.setItem(
      "userDetails",
      JSON.stringify({ name, email, photo, role })
    );

    console.log(userObj);
  };

  return (
    <UserContext.Provider value={{ setUser, userDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
