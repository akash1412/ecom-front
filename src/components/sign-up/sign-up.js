import React, { useState } from "react";

import { Box, Heading, FormControl, Button } from "@chakra-ui/core";

import FormInput from "../FormInput/formInput";

const Signup = () => {
  const [detail, setDetail] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState("false");

  const { username, email, password } = detail;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetail({ ...detail, [name]: value });
  };

  return (
    <>
      <Heading fontSize='2rem'>Create Account</Heading>
      <Box marginTop='1.5rem' width='85%'>
        <FormControl d='flex' flexDir='column'>
          <FormInput
            value={username}
            name='username'
            placeholder='User Name'
            type='text'
            handleChange={handleChange}
            fontSize='1.5rem'
            padding='1.8rem 1rem'
            borderColor='#3d5af1'
          />

          <FormInput
            value={email}
            name='email'
            placeholder='Email Address'
            type='text'
            handleChange={handleChange}
            fontSize='1.5rem'
            marginTop='1.7rem'
            padding='1.8rem 1rem'
            borderColor='#3d5af1'
            autoComplete='false'
          />

          <FormInput
            value={password}
            name='password'
            placeholder='Password'
            type='password'
            handleChange={handleChange}
            fontSize='1.5rem'
            marginTop='1.7rem'
            padding='1.8rem 1rem'
            borderColor='#3d5af1'
            autoComplete='false'
          />

          <Button
            backgroundColor='#3d5af1'
            color='#fff'
            marginTop='1.3rem'
            padding='1.8rem'
            borderRadius='0.25rem'
            fontSize='1.5rem'>
            Signup
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Signup;
