import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

export default function ProductQuickSearch(): React.ReactElement {
  return (
    <div className="productCont">
      <InputGroup>
        <InputGroup.Text id="search-product">Search</InputGroup.Text>
        <FormControl
          placeholder="Search Product"
          aria-label="Search Product"
          aria-describedby="search-product"
        />
      </InputGroup>
    </div>
  );
}

