import { commerce } from 'faker';
import { times } from 'lodash';

export interface CompatibilityDto {
  id: number;
  name: string;
}

export default function getCompatibilities(): CompatibilityDto[] {
  return times(12, (i) => {
    const id = i * 10;
    const name = commerce.productName();
    return {
      id,
      name,
    };
  });

}
