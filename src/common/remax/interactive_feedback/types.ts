/**
 * 交互方法公用类型定义
 */

/**
 * toast 提示
 */
export type TToast = {
  info(content: string, duration?: number): void;
  hide(): void;
  loading(content: string): void;
  hideLoading(): void;
};

/**
 * 警告弹窗，主要用于提醒和告示重要的信息
 */
export type TAlert = (title?: string, content?: string, text?: string) => Promise<void>;

/**
 * 提示确认框，主要用于确认或取消操作
 */
export type TConfirm = (
  title?: string,
  content?: string,
  confirmText?: string,
  cancelText?: string
) => Promise<boolean>;
