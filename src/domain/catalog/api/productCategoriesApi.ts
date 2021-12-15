import createEntityApi from 'src/infrastructure/persistence/createEntityApi';

export interface ProductCategoryDto {
  id: number;
  name: string;
  description?: string;
}

export type ProductCategoryDtoParams = Omit<ProductCategoryDto, 'id'>;

const productCategoriesApi = createEntityApi<ProductCategoryDto>('/product-categories');

export default productCategoriesApi;
