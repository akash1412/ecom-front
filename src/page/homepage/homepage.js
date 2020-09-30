import React from "react";
import { Box, Heading, Image } from "@chakra-ui/core";

import "./homepage.scss";

const HomePage = () => {
  return (
    <Box
      paddingX='2rem'
      display='grid'
      justifyContent='center'
      // gridTemplateColumns='29rem 26rem 25rem 25rem'
      // gridTemplateColumns='repeat(6,minmax(min-content,25rem))'
      gridTemplateColumns=' repeat(4,minmax(min-content,25rem)) '
      gridTemplateRows='repeat(4,minmax(10rem ,15rem))'
      // gridTemplateRows='1fr 15rem 20rem 15rem'
      gridAutoFlow='row'
      gridGap='2rem'>
      <Box
        backgroundColor='#82CDDF'
        gridColumn={["1 / -1", "1 / -1", "1/4", "1 / 3"]}
        borderRadius='1.2rem'
        padding='.5rem'
        cursor='pointer'
        textAlign='center'
        d='flex'
        justifyContent='center'
        alignItems='center'>
        <Heading size='xl'> GET UP TO 50 % OFF </Heading>
      </Box>
      <Box
        backgroundColor='#D4D9DB'
        // gridColumn='3/4'

        gridRow={["3/4", "3/4", "3/4", ""]}
        // gridRow={["2/3", "1/3", "1/3", "1/3"]}
        borderRadius='1.2rem'
        overflow='hidden'
        cursor='pointer'>
        <Image
          width='100%'
          height='100%'
          objectFit='cover'
          src='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1598821285/homepage/sneaker-1.jpg'
        />
      </Box>
      <Box
        backgroundColor='#fabea7'
        // gridColumn='4/5'
        // gridColumn={["3/5", "4/5", "4/5", "4/5"]}
        gridRow='1/3'
        borderRadius='1.2rem'
        overflow='hidden'>
        <Image
          width='100%'
          height='100%'
          src='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1599036178/homepage/pexels-aditya-aiyar-1407354_ckgn8a.jpg'
        />
      </Box>
      <Box
        // backgroundColor="#C69FC4"
        backgroundColor='gray.50'
        color='#fff'
        gridColumn={["1/-1", "1/-1", "1/4", "1 / 3"]}
        // gridColumn={["1/5", "1/3", "1/3", "1/3"]}
        gridRow='2 / 3'
        // gridRow={["3/4", "2/3", "2/3", "2/3"]}
        borderRadius='1.2rem'
        d='flex'
        // justifyContent="center"
        // alignItems="center"
      >
        <Box flexGrow='1' d='flex' justifyContent='center' alignItems='center'>
          <Heading size='xl' textAlign='center'>
            Winter Weekends
          </Heading>
        </Box>
        <Box width='40%'>
          <Image
            src='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1598821190/homepage/winter.jpg'
            width='100%'
            height='100%'
          />
        </Box>
      </Box>
      <Box
        backgroundColor='#EEBC3E'
        gridColumn='3/5'
        // gridColumn={["1/3", "3/5", "3/5", "3/5"]}
        gridRow='3/4'
        // gridRow={["4/5", "3/4", "3/4", "3/4"]}
        borderRadius='1.2rem'
        padding='.5rem'
        d='flex'
        justifyContent='center'
        alignItems='center'>
        <Heading size='xl'> New - in Knitwear </Heading>
      </Box>
      <Box
        backgroundColor='#ffc1fa'
        gridRow='3/5'
        // gridRow={["", "3/5", "3/5", "3/5", "3/5"]}
        borderRadius='1.2rem'
        overflow='hidden'>
        <Image
          width='100%'
          height='100%'
          objectFit='cover'
          src='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1598821036/homepage/activewear.jpg'
        />
      </Box>
      <Box
        backgroundColor='#a3f7bf'
        gridRow='3/5'
        borderRadius='1.2rem'
        overflow='hidden'
        d='flex'>
        <Image
          src='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1598820984/homepage/sneaker-2.jpg'
          width='100%'
          height='100%'
        />
      </Box>
      <Box
        backgroundColor='#FA446F'
        gridColumn='3/5'
        gridRow='4/5'
        borderRadius='1.2rem'
        d='flex'>
        <Box flexGrow='1' d='flex' justifyContent='center' alignItems='center'>
          <Heading size='xl'> New Season Textures </Heading>
        </Box>
        <Box width='40%'>
          <Image
            // src="https://res.cloudinary.com/dhqp2dd6b/image/upload/v1598821174/homepage/casual.jpg"
            width='100%'
            height='100%'
          />
        </Box>
      </Box>
    </Box>

    // <div className='container'>
    //   <div className='grid-item-1'>
    //     <h2>50% off</h2>
    //   </div>
    //   <div className='grid-item-2'>shoes</div>
    //   <div className='grid-item-3'>jackets</div>
    //   <div className='grid-item-4'>nike</div>
    //   <div className='grid-item-5'>nike</div>
    //   <div className='grid-item-6'>nike</div>
    //   <div className='grid-item-7'>nike</div>
    //   <div className='grid-item-8'>nike</div>
    // </div>
  );
};

export default HomePage;
