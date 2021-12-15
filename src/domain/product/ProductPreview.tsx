import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useAsync } from 'react-use';

import LoadableContent from 'src/ui/LoadableContent';

import productsApi, { ProductDto } from '../catalog/api/productsApi';

interface IProductPreviewProps {
  id: number | string;
}

export default function ProductPreview(props: IProductPreviewProps): React.ReactElement {
  const { id } = props;

  const productState = useAsync(() => {
    return productsApi.getById(id);
  })

  return (
    <div className="productCont">
      <LoadableContent
        {...productState}
        render={renderProductPreview}
      />

    </div>
  );
}

function renderProductPreview(product: ProductDto) {
  const { description, image, price, title } = product;
  return (
    <Row>
      <Col sm={6}>
        <Image src={image} style={{ maxHeight: 520 }} />
      </Col>
      <Col>
        <h6>{title}</h6>
        <p>Price: {price}</p>
        <p>Rating: {calculateRating(product)}</p>
        <p>Description: {description}</p>
      </Col>
    </Row>
  );
}

function calculateRating(product: ProductDto): string {
  const { rating: { count, rate } } = product;
  if (count > 0) {
    return (rate / count).toFixed(2);
  } else {
    return '0';
  }
}
