import { showToast, hideToast, showLoading } from 'remax/toutiao';

export const toast = {
  info: (content: string, duration = 1) => showToast({ title: content, duration: duration * 1000, icon: 'none' }),
  loading: (content: string) => showLoading({ title: content }),
  hide: hideToast,
};
