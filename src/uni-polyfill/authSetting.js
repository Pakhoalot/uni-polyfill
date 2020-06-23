/**
 * 对应小程序的权限设置, 采取和小程序一样的逻辑
 *
 */
const authSetting = {};
// export default authSetting;

const potocol = {
  scope: {
    userInfo: {},
    userLocation: {},
    userLocationBackground: {},
    address: {},
    invoiceTitle: {},
    invoice: {},
    werun: {},
    record: {},
    writePhotosAlbum: {},
    camera: {},
  },
};
/**
 * 将obj展开
 * 如 { a: b { c: {} } } 展开成 [ "a.b.c" ]
 *
 * @param {*} obj
 * @param {*} depth
 * @param {*} maxDepth
 * @returns
 */
function flatten(obj, depth, maxDepth) {
  let result = [];
  if(maxDepth <= depth) return [];
  for (let key in obj) {
    if (typeof obj[key] === "object" && Object.keys(obj[key]).length) {
      flatten(obj[key], ++depth, maxDepth).forEach((s) => result.push(`${key}.${s}`))
    } else {
      result.push(key);
    }
  }
  return result;
}

const authList = flatten(potocol, 0, 2);
