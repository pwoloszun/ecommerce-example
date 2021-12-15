import React from 'react';
import { Form } from 'react-bootstrap';

interface Item {
  id: number | string;
  name: string;
}

interface IChechboxGroupProps<T> {
  label: string;
  items: T[];
}

export default function ChechboxGroup<T extends Item>(
  props: IChechboxGroupProps<T>
): React.ReactElement {
  const { items, label } = props;
  return (
    <Form.Group>
      <Form.Label as="h6">
        {label}
      </Form.Label>
      <div className="ps-3">
        {
          items.map((item) => {
            const { id, name } = item;
            return (
              <Form.Check type="checkbox" label={name} key={id} />
            );
          })
        }
      </div>
    </Form.Group>
  );
}

