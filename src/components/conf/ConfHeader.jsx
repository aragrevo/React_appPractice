import React from 'react';
import 'styles/components/conf/Header.css';
import { Link } from 'wouter';
import { ShoppingCartOutlined } from '@ant-design/icons';
// import AppContext from 'context/conf/AppContext';

// eslint-disable-next-line arrow-body-style
export const ConfHeader = () => {
  // const { state } = useContext(AppContext);
  // const { cart } = state;
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/conf/home">Platzi Conf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/conf/checkout">
          <ShoppingCartOutlined style={{ fontSize: '24px', color: '#08c' }} />
        </Link>
        {/* {cart.length > 0 && <div className="Header-alert">{cart.length}</div>} */}
      </div>
    </div>
  );
};
