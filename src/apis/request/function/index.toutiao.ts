import { TFetchRequestConfig } from '@dyb881/fetch-request';
import { request } from 'remax/toutiao';

export const requestFunction: TFetchRequestConfig['requestFunction'] = ({ headers: header, ...config }) => {
  return request({ header, ...config } as any)
    .catch((error: any) => {
      return Promise.reject(error?.errMsg || error);
    })
    .then(({ data }) => data);
};
