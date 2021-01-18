import React from 'react';
import 'styles/components/conf/Products.css';
import Product from './ConfProduct';

const Products = ({ products }) => (
  <div className="Products">
    <div className="Products-items">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Products;
