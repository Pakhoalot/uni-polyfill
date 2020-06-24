import sha1 from "crypto-js/sha1";

const accessToken =
  "34_8EwvnmtNeUk-tEZ_rNtqg7VIPOwLdSpLk3lzKhJJo6_p4jp8RBIxzst2Eq0MxiVFkB25cMUjTE2789vjpf3y3zVgYMTJNFsKhfEfiOZkH7uYW8Crm4qBQXBmJfRcC-49s_lc5pFBuLeQD6DDNIXfABACXM";
const jsapi_ticket =
  "kgt8ON7yVITDhtdwci0qefLSuVA32SQZ8pp8MsRPzvQbKH_5-C26PRrId4RYJL-d0xSRb7BqEzzzNhRI4oh2iw";
export const nonceStr = "Wm3WZYTPz0wzccnW";
export const timestamp = "1592548753877";
const url = "http://2djecs.natappfree.cc/";
const enc = `jsapi_ticket=${jsapi_ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;

export const signature = sha1(enc).toString();

export const appId = "wx073dfc91d230b984";
export const appsecret = "cd50a588f0bfd68688746897323cc8d4";

export function getUserInfoByCode(code) {
  return Promise.resolve(`{"openid":"okpzgvstPOf9prPn8YG-v1C9nDyo","nickname":"梁伯豪","sex":1,"language":"zh_CN","city":"佛山","province":"广东","country":"中国","headimgurl":"http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/zY9WwlZ7M9Yho2VT1xpjzuPdpOHonsatq5sMHIWh84ciahL4un6xciauXd2oCn2ferGTGqrmiaIcAMPj93Z8GN0lA\/132","privilege":[]}`);
}

const wxGetUserInfoReturnsPotocol = {
  encryptedData:
    "nHJWciB8YQziXkmhFLd6FLXQzG73BFgj+rSlPZpRrOK+IWZ5pYkSxEdsCog6yJOp915RVdhR9ueVTxVDfkTGwRLHGXL9h+iNQ4iYJfFmxyt6WtO4gdIYoXClNh/Cnz253zhaMKokSZdGAOzGBNT+KiIPI93bHaNYKI9d2+wfw8HwAJhyThiw/5wjtB9zbkhsYzavSg5FKYL8ovP2SN/mAzwkfa1jGAMFSjwdWYLbKgSBYNhMAP33XoqM5p2tbDOolQZySIgtU4SLLw5E12CqDKcB3olzUMmtXxZNQn1WGNhC5XMNMusctTiTN85QyIbApO900DscWQiv9rxznzWZwi7CaVz9s7uobqyKHHO00VysRUVWYFnbBmdI1pfor8y2PpFlBCEeF45cOAEpuwzUiVjcyWrunYM/1qofGL8Z+wapkBFtPABQCKwkCNMoIjHdVaKW5q5EIudGjcUQu5DK4ec5cz4HZciCUNUGBR8yDmM=",
  errMsg: "getUserInfo:ok",
  iv: "k+jDVMgF9wROxix0p7tJsg==",
  rawData: `{"nickName":"梁伯豪","gender":1,"language":"zh_CN","city":"Foshan","province":"Guangdong","country":"China","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/rJC5wV353D4bzYbU7m3MJ6rdwueia9DdjYtzdBe8waoNibhwWvLwPWVW5AY6nXbgtib40XHWbiaFFLx4aEMgtibQoew/132"}`,
  signature: "dd417cbbcd1f9beded845dc2bd16910178fff9a3",
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
