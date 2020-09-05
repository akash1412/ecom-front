import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Box, Heading, PseudoBox } from '@chakra-ui/core';
import FormInput from '../../components/FormInput/formInput';
import InputContainer from '../../components/input-container';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';

import { UserContext } from '../../context/userContext/userContext';

const SignUpPage = ({ history }) => {
  const { setUser } = useContext(UserContext);

  const [detail, setDetail] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [loading, setLoading] = useState('false');

  const { name, email, password, passwordConfirm } = detail;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetail({ ...detail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposne = await axios({
        headers: {},
        url: 'http://localhost:82/api/v1/users/signup',
        method: 'POST',
        data: { ...detail },
      });
      console.log(resposne);
      localStorage.setItem('jwt', resposne.data.token);
      setUser(resposne.data.data.user);

      setDetail({
        ...detail,
        name: '',
        password: '',
        passwordConfirm: '',
        email: '',
      });
      // history.push('/');
    } catch (error) {
      console.log(error.resposne.data);
    }
  };

  return (
    <Box
      height="calc(100vh - 5rem)"
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDir="column"
        height="50rem"
        width="33%"
        justifyContent="space-around"
        alignItems="center"
        boxShadow="0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"
      >
        <Box>
          <Heading fontSize="2.5rem">Create Your Account</Heading>
          <Heading paddingTop="1rem" fontSize="1.8rem" textAlign="center">
            LA MORE
          </Heading>
        </Box>
        <form
          className="form"
          style={{ width: '100%' }}
          onSubmit={handleSubmit}
        >
          <InputContainer>
            <MdPersonOutline size="2rem" />
            <FormInput
              value={name}
              name="name"
              placeholder="Name"
              type="text"
              handleChange={handleChange}
              autoComplete="off"
              className="input"
              // required
            />
          </InputContainer>
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
              // required
            />
          </InputContainer>
          <InputContainer>
            <AiOutlineLock size="2rem" />
            <FormInput
              value={password}
              name="password"
              placeholder="password"
              type="text"
              handleChange={handleChange}
              autoComplete="off"
              className="input"
              // required
            />
          </InputContainer>
          <InputContainer>
            <AiOutlineLock size="2rem" />
            <FormInput
              value={passwordConfirm}
              name="passwordConfirm"
              placeholder="confirm password"
              type="text"
              handleChange={handleChange}
              autoComplete="off"
              className="input"
              // required
            />
          </InputContainer>
          <PseudoBox
            as="button"
            type="submit"
            margin="0.3rem"
            marginTop="1.2rem"
            border="none"
            outline="none"
            padding="1.2rem 2rem"
            borderRadius=".5rem"
            cursor="pointer"
            backgroundColor="#fa446f"
            _hover={{ backgroundColor: '#fa446edc' }}
          >
            Sign Up
          </PseudoBox>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpPage;
