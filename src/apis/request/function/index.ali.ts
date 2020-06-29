import { TFetchRequestConfig } from '@dyb881/fetch-request';
import { request } from 'remax/ali';

export const requestFunction: TFetchRequestConfig['requestFunction'] = ({ responseType, ...config }) => {
  return request(config as any)
    .catch(({ error }: any) => {
      return Promise.reject(error === 13 ? 'request timeout' : 'request:fail');
    })
    .then(({ data }) => data);
};
