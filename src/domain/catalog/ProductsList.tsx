import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useAsync } from 'react-use';

import LoadableContent from 'src/ui/LoadableContent';

import productsApi, { ProductDto } from './api/productsApi';

export default function ProductsList(): React.ReactElement {
  const productsState = useAsync(productsApi.getAll);

  return (
    <div className="catalogCont">
      <LoadableContent
        {...productsState}
        render={renderProducts}
      />
    </div>
  );
}

function renderProducts(products: ProductDto[]) {
  return (
    <ListGroup variant="flush">
      {
        products.map((product) => {
          const { id, title, image } = product;
          return (
            <ListGroup.Item key={id}>
              <Row>
                <Col sm={2}>
                  <Image src={image} thumbnail style={{ height: 120 }} />
                </Col>
                <Col sm={10}>
                  <h4>
                    <Link to={`/product/${id}`}>
                      {title}
                    </Link>
                  </h4>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })
      }
    </ListGroup>
  );
}
