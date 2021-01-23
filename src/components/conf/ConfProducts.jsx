import React from 'react';
import 'styles/components/conf/Products.css';
// import AppContext from 'context/conf/AppContext';
import Product from './ConfProduct';

// eslint-disable-next-line arrow-body-style
const Products = ({ products }) => {
  // const { state, addToCart } = useContext(AppContext);
  // const { products } = state;

  // const handleAddToCart = (product) => () => {
  //   addToCart(product);
  // };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            // handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
