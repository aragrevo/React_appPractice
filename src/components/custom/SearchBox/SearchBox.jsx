import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './SearchBox.css';

export const SearchBox = () => (
  <div className="search-box">
    <input type="text" />
    <div className="icon">
      {/* <i className='fas fa-search fa-2x'></i> */}
      <SearchOutlined />
    </div>
  </div>
);
