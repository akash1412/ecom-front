import React from 'react';
import { Box, Input } from '@chakra-ui/core';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const [query, setQuery] = React.useState('');

  return (
    <Box flexBasis="40%" paddingX="3px" display="flex" alignItems="center">
      <AiOutlineSearch size="2rem" color="#F7F6F6" />
      <Input
        marginLeft="5px"
        width="65%"
        border="none"
        outline="none"
        // borderBottom="1px solid #ccc"
        placeholder="Search for items"
        onChange={(e) => setQuery(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
