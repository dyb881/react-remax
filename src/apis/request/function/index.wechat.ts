import { TFetchRequestConfig } from '@dyb881/fetch-request';
import { request } from 'remax/wechat';

export const requestFunction: TFetchRequestConfig['requestFunction'] = ({
  headers: header,
  responseType,
  ...config
}) => {
  return request({ header, ...config } as any)
    .catch((error: any) => {
      return Promise.reject(error?.errMsg || error);
    })
    .then(({ data }) => data);
};
