import React from 'react';
import { Button } from 'react-bootstrap';
import { BsFillGearFill } from 'react-icons/bs';

export default function AccountSettings(): React.ReactElement {
  return (
    <div className="accountCont">
      <Button variant="secondary">
        {'User Settings '}
        <BsFillGearFill size={20} />
      </Button>
    </div>
  );
}

