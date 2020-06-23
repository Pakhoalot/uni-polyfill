import { warn } from "../logger";
import { typeUnchecked } from "../msg";
/**
 * saveImageToPhotosAlbum imp
 * https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html
 */
export default function saveImageToPhotosAlbum({
  filePath,
  success,
  fail,
  complete,
}) {
  // TODO 可以通过<a>download属性来实现, 不着急, 暂时空实现
  Promise.resolve().then(() => {
    if (typeof filePath !== "string") {
      fail &&
        fail({ errMsg: typeUnchecked("filePath", "string", typeof filePath) });
    }
    warn("TODO 暂时采用空实现");
    success && success({});
    complete && complete({});
  });
}
