import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ProductsList from 'src/domain/catalog/ProductsList';
import SearchFilters from 'src/domain/catalog/SearchFilters';
import ProductQuickSearch from 'src/domain/product/ProductQuickSearch';

export default function SearchProductPage(): React.ReactElement {
  return (
    <div>
      <h5 className="mb-3">SearchProductPage</h5>
      <Row className="mb-3">
        <Col>
          <ProductQuickSearch />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={3}>
          <SearchFilters />
        </Col>
        <Col>
          <ProductsList />
        </Col>
      </Row>
    </div>
  );
}
