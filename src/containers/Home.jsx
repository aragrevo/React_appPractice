import React from 'react';

import initialState from 'initialState';
import Products from 'components/conf/ConfProducts';

const Home = () => <Products products={initialState.products} />;

export default Home;
