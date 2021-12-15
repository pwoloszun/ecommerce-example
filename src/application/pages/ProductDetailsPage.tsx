import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import SuggestedItemsCarousel from 'src/domain/catalog/SuggestedItemsCarousel';
import ProductPreview from 'src/domain/product/ProductPreview';
import BuyBox from 'src/domain/order/BuyBox';

interface IPageParams {
  id: string;
}

export default function ProductDetailsPage(): React.ReactElement {
  const { id } = useParams<IPageParams>();

  return (
    <div>
      <h5 className="mb-3">ProductDetailsPage ({id})</h5>
      <Row className="mb-3">
        <Col>
          <SuggestedItemsCarousel />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={9}>
          <ProductPreview id={id} />
        </Col>
        <Col>
          <BuyBox />
        </Col>
      </Row>
    </div>
  );
}
