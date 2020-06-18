import { showToast, hideToast, showLoading, alert as aliAlert, confirm as aliConfirm } from 'remax/ali';
import { TToast, TAlert, TConfirm } from './types';

export const toast: TToast = {
  info: (content, duration = 1) => showToast({ content, duration: duration * 1000 }),
  loading: (content) => showLoading({ content }),
  hide: hideToast,
};

export const alert: TAlert = (title, content = '', text = '确定') => {
  return aliAlert({ title, content, buttonText: text });
};

export const confirm: TConfirm = async (title, content, confirmText = '确定', cancelText = '取消') => {
  const { confirm } = await aliConfirm({
    title,
    content,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
  });
  return confirm;
};
