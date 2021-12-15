import userApi, { UserDto } from './api/userApi';

export enum UserPermission {
  User = 'USER_PERM',
  Admin = 'ADMIN_PERM',
  Guest = 'GUEST_PERM'
}

interface IUserCache {
  user: UserDto | null;
}

const cache: IUserCache = {
  user: null
};

function getInfo(): Promise<UserDto> {
  if (cache.user !== null) {
    return Promise.resolve(cache.user);
  } else {
    const userId = 1;
    return userApi.getById(userId)
      .then((userData) => {
        cache.user = userData;
        return cache.user;
      });
  }
}

function hasRole(perm: UserPermission): boolean {
  return UserPermission.User === perm;
}

const currentUserApi = {
  hasRole,
  getInfo,
};

export default currentUserApi;
