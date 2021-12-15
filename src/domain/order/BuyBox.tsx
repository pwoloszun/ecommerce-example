import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { lorem } from 'faker';

export default function BuyBox(): React.ReactElement {
  return (
    <div className="orderCont">
      <h5>BuyBox</h5>
      <Row className="mb-3">
        <Col>
          Some additional info: {lorem.paragraph()}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button variant="primary">
            Add to Cart
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button variant="primary">
            Buy Now
          </Button>
        </Col>
      </Row>


    </div>
  );
}
