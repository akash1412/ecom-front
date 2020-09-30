import React, { useEffect, useContext } from "react";
import { Box, Spinner } from "@chakra-ui/core";
import { ProductContext } from "../../context/products/products-context";

import Card from "../../components/card/card";

const Collection = ({ match }) => {
  const { handleFetch, products } = useContext(ProductContext);

  useEffect(() => {
    handleFetch(match.params.category);
  }, [handleFetch]);

  const Loading = () => {
    return (
      <Box pos='absolute' top='30%' left='50%' transform='tranlate(-50%,-50%)'>
        <Spinner
          emptyColor='#f5f5f5'
          color='#1c1124'
          thickness='2px'
          speed='0.5s'
          // size='xl'
          width='5rem'
          height='5rem'
        />
      </Box>
    );
  };

  return (
    <Box height='100%' width='100%' position='relative'>
      <h1>Collection: {match.params.category}</h1>

      {products.length === 0 ? (
        <Loading />
      ) : (
        <Box
          paddingY='2.5rem'
          d='grid'
          // gridTemplateColumns="repeat(auto-fill, minmax(15rem, 26rem)"
          gridTemplateColumns='repeat(auto-fill,minmax(15rem,26rem))'
          justifyContent='center'
          gridColumnGap='2.2rem'
          gridRowGap='4rem'>
          {products.map(({ _id, imgUrl, ...detailProps }) => (
            <Card key={_id} {...detailProps} id={_id} url={imgUrl} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Collection;
