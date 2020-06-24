import store from "../store";
/**
 * 检查登录是否可用
 * 判断逻辑是基于code是否存在并且code是否过期
 *
 */
export default function checkSession({ success, fail, complete }) {
  Promise.resolve(null).then(() => {
    if (store.get("code")) {
      // TODO 判断code是否过期
      success &&
        success({
          errMsg: "checkSession:ok",
        });
    } else {
      fail && fail({ errMsg: `checkSession:fail. not logined.` })
    }
    complete && complete();
  });
}
