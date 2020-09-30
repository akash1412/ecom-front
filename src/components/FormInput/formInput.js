import React from "react";

import { Input } from "@chakra-ui/core";

const FormInput = (props) => {
  const { value, name, placeholder, type, handleChange, ...styleProps } = props;
  return (
    <Input
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      {...styleProps}
    />
  );
};

export default FormInput;
