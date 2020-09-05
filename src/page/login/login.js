import React, { useState } from 'react';
import axios from 'axios';

import { Box, PseudoBox } from '@chakra-ui/core';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import FormInput from '../../components/FormInput/formInput';
import InputContainer from '../../components/input-container';

import './login.scss';

const Login = () => {
  const [detail, setDetail] = useState({
    email: '',
    password: '',
  });

  const { email, password } = detail;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetail({ ...detail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(JSON.stringify(detail));

    try {
      const resposne = await axios({
        method: 'POST',
        url: 'http://localhost:82/api/v1/users/login',
        data: { ...detail },
      });
      console.log(resposne);
    } catch (error) {
      console.log(error.resposne.data);
    }
  };

  return (
    <Box
      height="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <form className="form" onSubmit={handleSubmit}>
        <InputContainer>
          <AiOutlineMail size="2rem" />
          <FormInput
            value={email}
            name="email"
            placeholder="Email"
            type="text"
            handleChange={handleChange}
            autoComplete="off"
            className="input"
            required
          />
        </InputContainer>
        <InputContainer>
          <AiOutlineLock size="2rem" />

          <FormInput
            value={password}
            name="password"
            placeholder="Password"
            type="text"
            handleChange={handleChange}
            autoComplete="off"
            className="input"
            required
          />
        </InputContainer>

        <PseudoBox
          as="button"
          type="submit"
          margin="0.3rem"
          border="none"
          outline="none"
          padding="1.2rem 2rem"
          borderRadius=".5rem"
          backgroundColor="#fa446f"
          _hover={{ backgroundColor: '#fa446edc' }}
        >
          Login
        </PseudoBox>
      </form>
    </Box>
  );
};

export default Login;
