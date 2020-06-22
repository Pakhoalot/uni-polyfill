/**
 * openSetting implementation
 * https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html
 * @param {*} param0
 */
export default function openSetting({
  withSubscriptions = false,
  success,
  fail,
  complete,
}) {
  const result = {
    authSetting: authSettingCreator(),
    subscriptionsSetting: subscriptionsSettingCreator(),
  };
  // TODO 暂时不会fail
  Promise.resolve().then(() => {
    success && success(result);
    complete && complete();
  });
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html
 *
 */
function authSettingCreator() {
  return {
    ["scope.userInfo"]: false,
    ["scope.userLocation"]: false,
    ["scope.address"]: false,
    ["scope.invoiceTitle"]: false,
    ["scope.invoice"]: false,
    ["scope.werun"]: false,
    ["scope.record"]: false,
    ["scope.writePhotosAlbum"]: false,
    ["scope.camera"]: false,
  };
}

function subscriptionsSettingCreator() {
  return {
    mainSwitch: false,
    itemSettings: {
      /* TODO */
    },
  };
}
