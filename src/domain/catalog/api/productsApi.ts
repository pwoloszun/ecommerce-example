import createEntityApi from 'src/infrastructure/persistence/createEntityApi';

export interface ProductDto {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type ProductDtoParams = Omit<ProductDto, 'id'>;

const productsApi = createEntityApi<ProductDto>('/products');

export default productsApi;
