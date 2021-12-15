import React from 'react';
import { Button } from 'react-bootstrap';
import { BsFillBagFill } from 'react-icons/bs';

export default function Cart(): React.ReactElement {
  return (
    <div className="orderCont">
      <Button variant="secondary">
        {'Cart (3) '}
        <BsFillBagFill size={20} />
      </Button>
    </div>
  );
}
