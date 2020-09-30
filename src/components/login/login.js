import React, { useState } from "react";

import { Box, Heading, FormControl, Button } from "@chakra-ui/core";
import FormInput from "../FormInput/formInput";

const Login = () => {
  const [detail, setDetail] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const { loginEmail, loginPassword } = detail;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setDetail({ ...detail, [name]: value });
  };

  return (
    <>
      <Heading fontSize='2rem'>Log In</Heading>
      <Box marginTop='1.5rem' width='85%'>
        <FormControl d='flex' flexDir='column'>
          <FormInput
            value={loginEmail}
            name='loginEmail'
            placeholder='Email Address'
            type='text'
            handleChange={handleLoginChange}
            fontSize='1.5rem'
            marginTop='1.7rem'
            padding='1.8rem 1rem'
            borderColor='#3d5af1'
          />

          <FormInput
            value={loginPassword}
            name='loginPassword'
            placeholder='Password'
            type='password'
            handleChange={handleLoginChange}
            fontSize='1.5rem'
            marginTop='1.7rem'
            padding='1.8rem 1rem'
            borderColor='#3d5af1'
          />

          <Button
            backgroundColor='#3d5af1'
            color='#fff'
            marginTop='1.3rem'
            padding='1.8rem'
            borderRadius='0.25rem'
            fontSize='1.5rem'>
            login
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Login;
