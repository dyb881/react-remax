import { showToast, hideToast, showLoading, showModal } from 'remax/wechat';
import { TToast, TAlert, TConfirm } from './types';

export const toast: TToast = {
  info: (content, duration = 1) => showToast({ title: content, duration: duration * 1000, icon: 'none', mask: true }),
  loading: (content) => showLoading({ title: content, mask: true }),
  hide: hideToast,
};

export const alert: TAlert = async (title, content = '', text = '确定') => {
  await showModal({ title, content, showCancel: false, confirmText: text });
};

export const confirm: TConfirm = async (title, content, confirmText = '确定', cancelText = '取消') => {
  const { confirm } = await showModal({ title, content, confirmText, cancelText });
  return confirm;
};
