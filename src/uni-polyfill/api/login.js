import { appId, appsecret } from "../../mock.js";
import store from "../store";
/**
 * 调用该接口获取登录凭证(code)
 *
 * https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
 * https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
 * @returns
 */
export default function login({ timeout, success, fail, complete }) {
  if (store.get("code")) {
    Promise.resolve(null).then(() => {
      const code = store.get("code");
      success && success({ errMsg: "login:ok", code });
    });
  } else {
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodeURIComponent(
      window.location.href
    )}&response_type=code&scope=snsapi_userinfo#wechat_redirect`;
  }
}
