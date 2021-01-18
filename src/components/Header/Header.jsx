import React, { useState, useContext } from 'react';

import { Layout } from 'antd';
import { Switch } from 'antd';
import { ThemeContext } from '../../context/ThemeContext';
import { SearchBox } from '../custom/SearchBox/SearchBox';

const { Header } = Layout;

export const TopBar = ({ title }) => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: { color },
      }}
    >
      <h1 style={{ color }}>{title}</h1>
      <SearchBox />
      <Switch
        checkedChildren="Light Mode"
        unCheckedChildren="Dark Mode"
        checked={darkMode}
        onClick={handleClick}
      />
    </Header>
  );
};
