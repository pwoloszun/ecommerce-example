import React from 'react';

import SearchProductPage from 'src/application/pages/SearchProductPage';
import ProductDetailsPage from 'src/application/pages/ProductDetailsPage';

import { RouteInfo } from '../types/RouteInfo';

const loggedUserRoutes: RouteInfo[] = [
  {
    path: '/find-product',
    label: 'Products Catalog',
    main: () => <SearchProductPage />
  },
  {
    path: '/product/:id',
    label: 'Product Details',
    main: () => <ProductDetailsPage />
  },
];

export default loggedUserRoutes;
