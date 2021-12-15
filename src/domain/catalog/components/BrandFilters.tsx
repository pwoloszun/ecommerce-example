import React from 'react';

import ChechboxGroup from 'src/ui/ChechboxGroup';

import getBrands from '../api/brandsApi';

export default function BrandFilters(): React.ReactElement {
  const brands = getBrands();

  return (
    <ChechboxGroup
      label="Brand"
      items={brands}
    />
  );
}
