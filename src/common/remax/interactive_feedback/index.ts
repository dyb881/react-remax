import { Toast } from 'antd-mobile';

export const toast = {
  info: (content: string, duration = 1) => Toast.info(content, duration),
  loading: (content: string) => Toast.loading(content, 0),
  hide: Toast.hide,
};
