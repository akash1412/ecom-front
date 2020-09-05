import React, { useEffect, useContext } from 'react';
import { Box } from '@chakra-ui/core';
import { ProductContext } from '../../context/products/products-context';

import Card from '../../components/card/card';

const Collection = ({ match }) => {
  const { handleFetch, products } = useContext(ProductContext);

  useEffect(() => {
    handleFetch(match.params.category);
  }, []);

  return (
    <Box>
      <h1>Collection: {match.params.category}</h1>
      <Box
        paddingY="2.5rem"
        d="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(15rem, 26rem))"
        justifyContent="center"
        gridColumnGap="1.6rem"
        gridRowGap="2rem"
      >
        {products.map(({ _id, imgUrl, ...detailProps }) => (
          <Card key={_id} {...detailProps} id={_id} url={imgUrl} />
        ))}
      </Box>
    </Box>
  );
};

export default Collection;
