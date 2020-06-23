import authSetting from "../authSetting";
import { warn } from "../logger";
/**
 * openSetting implementation
 * https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html
 */
export default function openSetting({
  withSubscriptions = false,
  success,
  fail,
  complete,
}) {
  const result = {
    authSetting,
    subscriptionsSetting: subscriptionsSettingCreator(),
  };
  // TODO 暂时不会fail
  warn(`h5版本暂时没有设置面板`);
  Promise.resolve().then(() => {
    success && success(result);
    complete && complete();
  });
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html
 *
 */

function subscriptionsSettingCreator() {
  return {
    mainSwitch: false,
    itemSettings: {
      /* TODO */
    },
  };
}
