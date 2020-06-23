import authSetting from "../authSetting";
/**
 *
 * https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html
 * @param {*} param0
 */
export default function getSetting({
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
  success && success(result);
  complete && complete();
}

function subscriptionsSettingCreator() {
  return {
    mainSwitch: false,
    itemSettings: {
      /* TODO */
    },
  };
}
