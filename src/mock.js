import sha1 from "crypto-js/sha1";

const accessToken =
  "34_xSj75YpupdtsZo0C3qLt_oncjpA-UtebCADHDzxKjmBbm_mEYfckSKYZ-eJiAWzAoXQEMBlZ1LREr23pVE7CJSZHnHRe8FuixQfi5AUJVfzNQCQKoDpM2QymyfIjSLBwyM8GxwNPWH8z4ISRZBXbAAAMOK";
const jsapi_ticket =
  "kgt8ON7yVITDhtdwci0qefLSuVA32SQZ8pp8MsRPzvTCgL6zf7LzYr-U3_isYBYdBZ6Gi-26CUTuMaCqKMH4_A";
export const nonceStr = "Wm3WZYTPz0wzccnW";
export const timestamp = "1592548753877";
const url = "http://uux2mh.natappfree.cc/";
const enc = `jsapi_ticket=${jsapi_ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;

export const signature = sha1(enc).toString();
