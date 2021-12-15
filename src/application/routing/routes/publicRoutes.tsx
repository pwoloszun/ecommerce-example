import React from 'react';

import LandingPage from 'src/application/pages/LandingPage';
import AboutPage from 'src/application/pages/AboutPage';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    label: 'Home',
    main: () => <LandingPage />
  },
  {
    path: '/about',
    label: 'About us',
    main: () => <AboutPage />
  },
];

export default publicRoutes;
