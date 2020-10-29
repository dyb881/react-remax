export const setTitle = async (title: string) => {
  window.document.title = title;
  window.AlipayJSBridge?.call('setTitle', { title });
};

export const getPageInfo = () => {
  const { innerWidth } = window;
  return {
    width: innerWidth,
  };
};

export const getUpdateManager = undefined;

export const call = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};
