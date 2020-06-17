import { showToast, hideToast, showLoading } from 'remax/ali';

export const toast = {
  info: (content: string, duration = 1) => showToast({ content, duration: duration * 1000 }),
  loading: (content: string) => showLoading({ content }),
  hide: hideToast,
};
