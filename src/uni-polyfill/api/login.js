/**
 * 在小程序中调用该接口获取登录凭证(code), 然后需要通过去后台换取openId,
 * 我们的服务器存储了openId和UserInfo的对应值, 作为缓存, 所以在换取的时候,
 * 必须保证code的值的唯一的, 这样才能换到唯一的openId.
 *
 * https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
 * https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
 * @returns
 */
export default function login({
  timeout,
  success,
  fail,
  complete,
}) {
  const result = {
    code: "abcdefg123456",
  };

}
