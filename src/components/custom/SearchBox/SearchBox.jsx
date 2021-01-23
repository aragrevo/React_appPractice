import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './SearchBox.css';

export const SearchBox = () => (
  <div className="search-box">
    <input type="text" />
    <div className="icon">
      <SearchOutlined />
    </div>
  </div>
);
