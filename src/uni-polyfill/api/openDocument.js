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
  if(typeof filePath !== "string") {
    fail && fail(new Error(`options: filePath data should be a string instead of ${typeof filePath}`))
  }
  if(FILE_TYPE.indexOf(fileType) === -1) {
    fail && fail(new Error(`options: fileType should be one of ${FILE_TYPE}`));
  }
  // TODO 等待实现
  const result = {}
  success && success(result);
  complete && complete();

}


const FILE_TYPE = ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf"];
