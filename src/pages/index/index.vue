<template>
  <view>
    <button @click="scanCode">uni.scanCode</button>
    <button @click="setClipboardData">uni.setClipboardData</button>
    <button @click="scanCode">调用scanCode</button>
    <button @click="scanCode">调用scanCode</button>
    <button @click="scanCode">调用scanCode</button>
  </view>
</template>

<script>
export default {
  methods: {
    scanCode() {
      uni.scanCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function(res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        },
      });
    },
    setClipboardData() {
      uni.setClipboardData({
        data: "https://i.fkw.com/",
        success() {
          console.log("setClipboardData: success");
        },
      });
    },
  },
};
</script>

<style></style>
