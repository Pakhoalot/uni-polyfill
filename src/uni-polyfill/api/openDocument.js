import { typeUnchecked } from "../msg";
/**
 * openDocuement implementation
 * https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html
 */
export default function openDocument({
  filePath,
  showMenu = false,
  fileType,
  success,
  fail,
  complete,
}) {
  if (typeof filePath !== "string") {
    fail &&
      fail({ errMsg: typeUnchecked("filePath", "string", typeof filePath) });
  }
  if (FILE_TYPE.indexOf(fileType) === -1) {
    fail && fail({ errMsg: `fileType should be one of ${FILE_TYPE}` });
  }
  // TODO 等待实现
  const result = {};
  success && success(result);
  complete && complete();
}

const FILE_TYPE = ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf"];
