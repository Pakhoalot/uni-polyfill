import sha1 from "crypto-js/sha1";

const accessToken =
  "34_DLC0QTeSb0cv-4V1b4V6hp7Ezrgf0YmPADz7NqUe4Dgr9ss9YhF-9mHjaAdqlz2_PE5L6s4QnZ8yWtGLAiL1_GHg2yoOn0Wozwe0dfCHid1Eu9HfAN9SKVrBciuaxqk5hooFIzVNLQ9yf0VSTVQfADAIKF";
const jsapi_ticket =
  "kgt8ON7yVITDhtdwci0qefLSuVA32SQZ8pp8MsRPzvTjnHukSxFCHfLXi6xlp8AukMNOnw2RmunpT1OKbptaGw";
export const nonceStr = "Wm3WZYTPz0wzccnW";
export const timestamp = "1592548753877";
const url = "http://33kpy8.natappfree.cc/";
const enc = `jsapi_ticket=${jsapi_ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;

export const signature = sha1(enc).toString();
