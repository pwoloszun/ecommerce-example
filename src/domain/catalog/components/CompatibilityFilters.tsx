import React from 'react';

import ChechboxGroup from 'src/ui/ChechboxGroup';

import getCompatibilities from '../api/compatibilitiesApi';

export default function CompatibilityFilters(): React.ReactElement {
  const compatibilities = getCompatibilities();

  return (
    <ChechboxGroup
      label="Compatible with"
      items={compatibilities}
    />
  );
}
