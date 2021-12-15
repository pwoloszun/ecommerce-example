import React from 'react';

import MyCarousel from 'src/ui/MyCarousel';

import getSuggestedProductsApi from './api/suggestedProductsApi';

export default function SuggestedItemsCarousel(): React.ReactElement {
  const suggestions = getSuggestedProductsApi();
  console.log('sub:', suggestions);

  return (
    <div className="catalogCont">
      <MyCarousel items={suggestions} chunkSize={4} />
    </div>
  );
}

