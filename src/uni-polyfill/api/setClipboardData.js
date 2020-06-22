import copy from "../libs/h5-copy";
import { clipboardCache } from "./getClipboardData";
/**
 * setClipBoardData implementation
 * https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.setClipboardData.html
 */
export default function setClipboardData({ data, success, fail, complete }) {
  if (typeof data !== "string") {
    fail && fail(
      new Error(
        `options: data should be a string instead of ${typeof data}.`
      )
    );
    return;
  }
  Promise.resolve(null).then(() => {
    let result = copy(data);
    if(result) {
      clipboardCache.data = data;
      success && success({ data });
      complete && complete();
    } else {
      fail && fail(new Error(`fail: ${result}`));
    }
  });
}
