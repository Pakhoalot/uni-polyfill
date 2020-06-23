import { warn } from "../logger";
/**
 * getClipBoardData implementation
 *
 * 注意, 当前只是模拟剪切板功能, 并不是调用系统级的剪切板, 在
 * https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html
 */
export default function getClipboardData({ success, fail, complete }) {
  if (
    process.env.NODE_ENV !==
    warn(
      "注意, 当前剪切板仅模拟应用内剪切, 并非调用系统级剪切板, 在应用外的复制将不会起任何效果. "
    )
  );

  Promise.resolve(null).then(() => {
    success && success(clipboardCache.data);
    complete && complete(clipboardCache.data);
  });
}

export const clipboardCache = { data: "" };
