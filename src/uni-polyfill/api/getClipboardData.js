/**
 * getClipBoardData implementation
 *
 * 注意, 当前只是模拟剪切板功能, 并不是调用系统级的剪切板, 在
 * https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html
 */
export default function setClipboardData({ data, success, fail, complete }) {
  if(process.env.NODE_ENV !== console.info("注意, 当前剪切板仅模拟应用内剪切, 并非调用系统级剪切板, 在应用外的复制将不会起任何效果. "));

  if (typeof data !== "string") {
    fail && fail(
      new Error(
        `options: data should be a string instead of ${typeof data}.`
      )
    );
    return;
  }
  success && success(clipboardCache.data);
  complete && complete(clipboardCache.data);
}

export const clipboardCache = { data: "" };
