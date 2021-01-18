import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export const SearchBar = ({ search, searchInput, onSearch }) => (
  <Search
    style={{
      marginBottom: '10px',
      width: 500,
      marginRight: 0,
    }}
    value={search}
    ref={searchInput}
    placeholder="input search text"
    onSearch={onSearch}
    onChange={onSearch}
  />
);
