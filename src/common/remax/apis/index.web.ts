export const setTitle = (title: string) => (window.document.title = title);

export const getPageInfo = () => {
  const { innerWidth } = window;
  return {
    width: innerWidth,
  };
};

export const getUpdateManager = undefined;
