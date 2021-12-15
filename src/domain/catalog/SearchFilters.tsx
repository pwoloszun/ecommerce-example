import React from 'react';
import { Row } from 'react-bootstrap';

import BrandFilters from './components/BrandFilters';
import CompatibilityFilters from './components/CompatibilityFilters';

export default function SearchFilters(): React.ReactElement {
  return (
    <div className="catalogCont">
      <h5 className="mb-3">SearchFilters</h5>
      <Row className="mb-3">
        <BrandFilters />
      </Row>
      <Row className="mb-3">
        <CompatibilityFilters />
      </Row>
    </div>
  );
}
