import React from 'react';
import 'styles/components/conf/Layout.css';
import { ConfFooter } from './ConfFooter';
import { ConfHeader } from './ConfHeader';

export const ConfLayout = ({ children }) => (
  <div className="Main">
    <ConfHeader />
    {children}
    <ConfFooter />
  </div>
);
