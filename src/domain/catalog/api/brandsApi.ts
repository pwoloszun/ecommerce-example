import { company } from 'faker';
import { times } from 'lodash';

export interface BrandDto {
  id: number;
  name: string;
}

export default function getBrands(): BrandDto[] {
  return times(8, (i) => {
    const id = i * 10;
    const name = company.companyName();
    return {
      id,
      name,
    };
  });

}
