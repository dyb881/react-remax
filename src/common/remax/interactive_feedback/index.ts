import { Toast, Modal } from 'antd-mobile';
import { TToast, TAlert, TConfirm } from './types';

export const toast: TToast = {
  info: (content, duration = 1) => Toast.info(content, duration),
  loading: (content) => Toast.loading(content, 0),
  hide: Toast.hide,
};

export const alert: TAlert = (title, content, text = '确定') => {
  return new Promise((resolve) => {
    Modal.alert(title, content, [{ text, onPress: () => resolve() }]);
  });
};

export const confirm: TConfirm = (title, content, confirmText = '确定', cancelText = '取消') => {
  return new Promise((resolve) => {
    Modal.alert(title, content, [
      { text: cancelText, onPress: () => resolve(false) },
      { text: confirmText, onPress: () => resolve(true) },
    ]);
  });
};
