import React from 'react';
import './SearchBox.css';
import { SearchOutlined } from '@ant-design/icons';

export const SearchBox = () => {
  return (
    <div className='search-box'>
      <input type='text' />
      <div className='icon'>
        {/* <i className='fas fa-search fa-2x'></i> */}
        <SearchOutlined />
      </div>
    </div>
  );
};
