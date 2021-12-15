import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { chunk } from 'lodash';

import useHolder from 'src/infrastructure/hooks/useHolder';

export interface Item {
  id: number;
  name: string;
}

interface IMyCarouselProps<T> {
  items: T[];
  chunkSize: number;
}

export default function MyCarousel<T extends Item>(
  props: IMyCarouselProps<T>
): React.ReactElement {
  const { items, chunkSize } = props;
  const itemChunks = chunk(items, chunkSize);

  useHolder();

  return (
    <Carousel>
      {
        itemChunks.map((items, i) => {
          return (
            <Carousel.Item key={i}>
              <MyCarouselItemsChunk items={items} />
            </Carousel.Item>
          );
        })
      }
    </Carousel>
  );
}

function MyCarouselItemsChunk(props: { items: any[]; }) {
  const { items } = props;
  const colsCount = Math.floor(12 / items.length);
  return (
    <Container>
      <Row>
        {
          items.map((item) => {
            return (
              <Col key={item.id} sm={colsCount}>
                <MyCarouselSingleItem item={item} />
              </Col>
            );
          })
        }
      </Row>
    </Container>
  );
}

function MyCarouselSingleItem(props: { item: any; }) {
  const { item } = props;
  const { id, name } = item;
  return (
    <div>
      <img
        className="d-block w-100"
        src={`holder.js/180x120?text=${name}&bg=373940`}
        alt={name}
      />
      {/* <Carousel.Caption>
        <h3>{name}</h3>
      </Carousel.Caption> */}
    </div>
  );
}
