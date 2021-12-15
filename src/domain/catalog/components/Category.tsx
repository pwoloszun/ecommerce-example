import React from 'react';
import { Card } from 'react-bootstrap';

import MyImage from 'src/ui/MyImage';

import { ProductCategoryDto } from '../api/productCategoriesApi';

interface ICategoryProps {
  category: ProductCategoryDto
}

export default function Category(props: ICategoryProps): React.ReactElement {
  const { category } = props;

  return (
    <Card>
      <MyImage variant="top" src="holder.js/330x180" />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
