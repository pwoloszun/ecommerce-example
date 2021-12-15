import React from 'react';
import { useAsync } from 'react-use';
import { chunk } from 'lodash';
import { Row, Col } from 'react-bootstrap';

import LoadableContent from 'src/ui/LoadableContent';

import productCategoriesApi, { ProductCategoryDto } from './api/productCategoriesApi';
import Category from './components/Category';

export default function CategoriesGrid(): React.ReactElement {
  const categoriesState = useAsync(productCategoriesApi.getAll);

  return (
    <LoadableContent
      {...categoriesState}
      render={renderCategories}
    />
  );
}

function renderCategories(categories: ProductCategoryDto[]) {
  const categoriesChunks = chunk(categories, 4);
  return (
    <div className="catalogCont">
      {
        categoriesChunks.map((rowCategories, i) => {
          return (
            <CategoriesRow key={i} rowCategories={rowCategories} />
          );
        })
      }
    </div>
  );
}

interface ICategoriesRowProps {
  rowCategories: ProductCategoryDto[];
}

function CategoriesRow(props: ICategoriesRowProps) {
  const { rowCategories } = props;
  return (
    <Row className="my-3">
      {
        rowCategories.map((category) => {
          return (
            <Col key={category.id} sm={3} className="mx-0">
              <Category category={category} />
            </Col>
          );
        })
      }
    </Row>
  );
}
