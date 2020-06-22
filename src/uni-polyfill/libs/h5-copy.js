/**
 * 模拟copy
 * https://gitee.com/qrk12/h5-copy/blob/master/js_sdk/junyi-h5-copy/junyi-h5-copy.js
 * @param {*} content
 */
export default function h5Copy(content) {
  if (!document.queryCommandSupported("copy")) {
    // 不支持
    return false;
  }

  let textarea = document.createElement("textarea");
  textarea.value = content;
  textarea.readOnly = "readOnly";
  document.body.appendChild(textarea);
  textarea.select(); // 选择对象
  textarea.setSelectionRange(0, content.length); //核心
  /**
   * document.execCommand might by Obsolete, check
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
   */
  let result = document.execCommand("copy"); // 执行浏览器复制命令
  textarea.remove();
  return result;
}
