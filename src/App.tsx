import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from 'src/application/layouts/AppLayout';

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router >
  );
}
