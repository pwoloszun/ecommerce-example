import axios from 'axios';

import { delayedValue } from 'src/utils/delays';
import getApiUrl from './getApiUrl';

const DEFAULT_DELAY_IN_MS = 1200;

export interface Entity {
  id: number;
}

export type EntityParams<T extends Entity> = Omit<Partial<T>, 'id'>;

export default function createEntityApi<T extends Entity>(
  baseUrl: string,
  delayInMs = DEFAULT_DELAY_IN_MS
) {
  const apiDefaultUrl = getApiUrl(`${baseUrl}`);

  return {
    getAll(): Promise<T[]> {
      return axios.get(apiDefaultUrl)
        .then((response) => response.data)
        .then((entities) => delayedValue(entities, delayInMs));
    },

    create(params: EntityParams<T>): Promise<T> {
      return axios.post(apiDefaultUrl, params)
        .then((response) => response.data)
        .then((entity) => delayedValue(entity, delayInMs));
    },

    getById(id: number | string): Promise<T> {
      const url = getApiUrl(`${baseUrl}/${id}`);
      return axios.get(url)
        .then((response) => response.data)
        .then((entity) => delayedValue(entity, delayInMs));
    },

    update(id: number | string, params: EntityParams<T>): Promise<T> {
      const url = getApiUrl(`${baseUrl}/${id}`);
      return axios.patch(url, params)
        .then((response) => response.data)
        .then((entity) => delayedValue(entity, delayInMs));
    },

    remove(id: number | string): Promise<number | string> {
      const url = getApiUrl(`${baseUrl}/${id}`);
      return axios.delete(url)
        .then((response) => response.data)
        .then(() => delayedValue(id, delayInMs));
    },
  };
}
