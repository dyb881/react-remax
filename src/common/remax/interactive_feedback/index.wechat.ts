import { showToast, hideToast, showLoading } from 'remax/wechat';

export const toast = {
  info: (content: string, duration = 1) =>
    showToast({ title: content, duration: duration * 1000, icon: 'none', mask: true }),
  loading: (content: string) => showLoading({ title: content, mask: true }),
  hide: hideToast,
};
