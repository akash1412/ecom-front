import React, { useState } from "react";

import { Box, Input } from "@chakra-ui/core";

const EditableDetails = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { name, email } = JSON.parse(localStorage.getItem("userDetails"));
  const [userDetails, setUserDetails] = useState({
    name,
    email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <Box>
      <Input
        name="name"
        value={userDetails.name}
        onChange={handleInputChange}
        isReadOnly={!isEditing}
      />
      <Input
        name="email"
        value={userDetails.email}
        onChange={handleInputChange}
      />
      {/* <Input value={}> </Input> */}
    </Box>
  );
};

export default EditableDetails;
