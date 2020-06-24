import { error, warn } from "../logger";
import { getUserInfoByCode } from "../../mock";
import store from "../store";

/**
 * 和小程序getUserInfo不一样的是, 公众号获取UserInfo需要用户先有code,
 * 即已经使用了login
 *
 * @export
 * @param {*} {
 *   withCredentials,
 *   success,
 *   fail,
 *   complete,
 * }
 */
export default function getUserInfo({
  withCredentials,
  success,
  fail,
  complete,
}) {
  if (withCredentials) warn("getUserInfo: withCredentials 将忽略.");
  const code = store.get("code");
  /**
   * 由于本polyfill使用的是snsapi_userInfo作为域授权, 所以在login获取到code
   * 之后必定可以拉取userInfo
   */
  if (!code) {
    fail && fail({ errMsg: `getUserInfo:fail should login first` });
  }
  getUserInfoByCode(code).then((userInfo) => {
    if (!userInfo) {
      fail &&
        fail({
          errMsg: `getUserInfo:fail. userInfo should be exist instead of ${userInfo}`,
        });
      return;
    }
    // TODO 感觉直接set不是特别好, 看看authSetting的potocol实现
    store.set("authSetting", (last) => ({ ...last, ["scope.userInfo"]: true }))

    const res = userInfoAdapter(userInfo);
    success && success(res);
    complete && complete();
  });
}

/*
  微信小程序 wx.getUserInfo 成功返回样例

{
  encryptedData: "abcde",
  errMsg: "getUserInfo:ok",
  iv: "abvdeg",
  rawData: `{"nickName":"梁伯豪","gender":1,"language":"zh_CN","city":"Foshan","province":"Guangdong","country":"China","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/rJC5wV353D4bzYbU7m3MJ6rdwueia9DdjYtzdBe8waoNibhwWvLwPWVW5AY6nXbgtib40XHWbiaFFLx4aEMgtibQoew/132"}`,
  signature: "abcde",
  userInfo: {
    avatarUrl:
      "https://wx.qlogo.cn/mmopen/vi_32/rJC5wV353D4bzYbU7m3MJ6rdwueia9DdjYtzdBe8waoNibhwWvLwPWVW5AY6nXbgtib40XHWbiaFFLx4aEMgtibQoew/132",
    city: "Foshan",
    country: "China",
    gender: 1,
    language: "zh_CN",
    nickName: "梁伯豪",
    province: "Guangdong",
  },
};

公众号userInfo 成功返回样例
{
    openid: "abcde",
    nickname: "梁伯豪",
    sex: 1,
    language: "zh_CN",
    city: "佛山",
    province: "广东",
    country: "中国",
    headimgurl:
      "http://thirdwx.qlogo.cn/mmopen/vi_32/zY9WwlZ7M9Yho2VT1xpjzuPdpOHonsatq5sMHIWh84ciahL4un6xciauXd2oCn2ferGTGqrmiaIcAMPj93Z8GN0lA/132",
    privilege: [],
  }
*/

function userInfoAdapter(originResponse) {
  let oriResObj;
  try {
    oriResObj = JSON.parse(originResponse);
  } catch (err) {
    error(err.message);
    return;
  }
  return {
    errMsg: "getUserInfo:ok",
    rawData: originResponse,
    userInfo: {
      nickName: oriResObj.nickname,
      avatarUrl: oriResObj.headimgurl,
      country: oriResObj.country,
      city: oriResObj.city,
      province: oriResObj.province,
      gender: oriResObj.sex,
      language: oriResObj.language,
    },
  };
}
