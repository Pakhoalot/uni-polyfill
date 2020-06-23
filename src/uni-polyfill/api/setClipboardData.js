import copy from "../libs/h5-copy";
import { clipboardCache } from "./getClipboardData";
import { typeUnchecked } from "../msg";
/**
 * setClipBoardData implementation
 * https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.setClipboardData.html
 */
export default function setClipboardata({ data, success, fail, complete }) {
  Promise.resolve().then(() => {
    if (typeof data !== "string") {
      fail && fail({ errMsg: typeUnchecked("data", "string", typeof data) });
      return;
    }
    let result = copy(data);
    if (result) {
      clipboardCache.data = data;
      success && success({ data });
      complete && complete();
    } else {
      fail && fail(new Error(`fail: ${result}`));
    }
  });
}
