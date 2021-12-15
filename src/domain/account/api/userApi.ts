import createEntityApi from 'src/infrastructure/persistence/createEntityApi';

export interface UserDto {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
}

export type UserDtoParams = Omit<UserDto, 'id'>;

const userApi = createEntityApi<UserDto>('/users');

export default userApi;
