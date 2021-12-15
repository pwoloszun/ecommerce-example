import { fake } from 'faker';
import { times } from 'lodash';

export interface SuggestedProductDto {
  id: number;
  name: string;
}

export default function getSuggestedProductsApi(): SuggestedProductDto[] {
  return times(16, (i) => {
    const id = i * 10;
    const name = fake(`{{commerce.productAdjective}} {{commerce.productName}}`);
    return {
      id,
      name,
    };
  });

}
