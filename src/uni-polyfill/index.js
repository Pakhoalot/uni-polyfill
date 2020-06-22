/**
 * h5 部分uni接口实现
 * 约定:
 * 异步的方法，如果不传入 success、fail、complete 等 callback 参数，将以 Promise 返回数据。例如：uni.getImageInfo()
 * 异步的方法且有返回对象，如果希望获取返回对象，必须至少传入一项 success、fail、complete 等 callback 参数。例如：uni.connectSocket()
 * 同步的方法（即以 sync 结束），不封装 Promise。例如：uni.getSystemInfoSync()
 * 以 create 开头的方法，不封装 Promise。例如：uni.createMapContext()
 * 以 manager 结束的方法，不封装 Promise。例如：uni.getBackgroundAudioManager()
 *
 * https://uniapp.dcloud.io/api/README?id=promise-%e5%b0%81%e8%a3%85
 *
 * 由于现阶段h5是在微信浏览器内打开, 需要使用到微信浏览器的bridge能力, 故引入js-sdk.
 *
 * https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#0
 *
 * 然, 目前的wx.config仅在进入应用时直接调用, 不在每个页面内重新config, 这种做法只有在router hash模式下起效
 * 详情可以看一下这篇文章https://blog.csdn.net/qq_39985511/article/details/82698142
 *
 */
import wx from "./libs/js-sdk";
import { promisify } from "@dcloudio/uni-h5/src/core/helpers/promise";
import getSetting from "./api/getSetting";
import openSetting from "./api/openSetting";
import setClipboardData from "./api/setClipboardData";

import { nonceStr, timestamp, signature } from "../mock";
console.log(wx);

wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: "wx073dfc91d230b984", // 必填，公众号的唯一标识
  timestamp, // 必填，生成签名的时间戳
  nonceStr, // 必填，生成签名的随机串
  signature, // 必填，签名
  jsApiList: ["checkJsApi", "scanQRCode"], // 必填，需要使用的JS接口列表
});

wx.ready(() => {
  wx.checkJsApi({
    jsApiList: ["scanQRCode"], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function(res) {
      console.log(res);
    },
  });
});


function navigateToMiniProgram({ fail }) {
  if (!process.env.NODE_ENV === "production")
    console.log(
      `uni.navigateToMiniProgram 跳转到小程序在h5上未实现, 本实现只是空实现, 避免报错.`
    );
}

/**
 * 在小程序中调用该接口获取登录凭证(code), 然后需要通过去后台换取openId,
 * 我们的服务器存储了openId和UserInfo的对应值, 作为缓存, 所以在换取的时候,
 * 必须保证code的值的唯一的, 这样才能换到唯一的openId.
 *
 *
 * @param {*} options
 * @returns
 */
function login(options) {
  const result = {
    code: "abcdefg123456",
  };

  if (options) {
    const { success, fail } = options;
    setTimeout(() => {
      success(result);
    });
    return;
  }

  return new Promise((res, rej) => {
    // 直接resolve一个code, 因为在h5端, 根本不可能失败
    res([null, result]);
  });
}

uni.login = login;
/**
 *
 *
 */
const scanCode = wx.scanQRCode;

const polyfill = {
  scanCode,
  setClipboardData,
  getSetting,
  openSetting,
  navigateToMiniProgram,
};

for (const method in polyfill) {
  Object.defineProperty(uni, method, {
    value: promisify(method, polyfill[method]),
    writable: false,
    configurable: false,
  });
}
