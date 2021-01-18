import React from 'react';
import 'styles/components/conf/Header.css';
import { Link } from 'wouter';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const ConfHeader = () => (
  <div className="Header">
    <h1 className="Header-title">
      <Link to="/conf/home">Platzi Conf Merch</Link>
    </h1>
    <div className="Header-checkout">
      <Link to="/conf/checkout">
        <ShoppingCartOutlined style={{ fontSize: '24px', color: '#08c' }} />
      </Link>
    </div>
  </div>
);
