import { showToast, hideToast, showLoading, hideLoading, showModal } from 'remax/toutiao';
import { TToast, TAlert, TConfirm } from './types';

export const toast: TToast = {
  info: (content: string, duration = 1) => showToast({ title: content, duration: duration * 1000, icon: 'none' }),
  hide: hideToast,
  loading: (content: string) => showLoading({ title: content }),
  hideLoading,
};

export const alert: TAlert = async (title, content = '', text = '确定') => {
  await showModal({ title, content, showCancel: false, confirmText: text });
};

export const confirm: TConfirm = async (title, content, confirmText = '确定', cancelText = '取消') => {
  const { confirm } = await showModal({ title, content, confirmText, cancelText });
  console.log(confirm);
  return confirm;
};
