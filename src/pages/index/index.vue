<template>
  <view>
    <button @click="scanCode">scanCode</button>
    <button @click="setClipboardData">setClipboardData</button>
    <button @click="getClipboardData">getClipboardData</button>
    <button @click="navigateToMiniProgram">navigateToMiniProgram</button>
    <button @click="saveImageToPhotosAlbum">saveImageToPhotosAlbum</button>
    <button @click="login">login</button>
    <button @click="checkSession">checkSession</button>
    <button @click="getUserInfo">getUserInfo</button>
    <button open-type="getUserInfo" @getuserinfo="opt_GetUserInfo">open-type: getUserInfo</button>
    <button @click="authorize">authorize</button><input v-model="authorizeText"></input>
    <button @click="getSetting">getSetting</button>
    <button @click="openSetting">openSetting</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      authorizeText: ""
    }
  },
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
      uni
        .setClipboardData({
          data: "abcde",
        })
        .then(([err, data]) => {
          if (err) console.log(err);
          else console.log("setClipboardData: success", data);
        });
    },
    getClipboardData() {
      uni.getClipboardData().then(([err, data]) => {
        if (err) console.log(err);
        else {
          console.log("getClipboardData: success", data);
        }
      });
    },
    navigateToMiniProgram() {
      uni.navigateToMiniProgram();
    },
    saveImageToPhotosAlbum() {
      uni.saveImageToPhotosAlbum({
        filePath: "abcdlkg"
      })
        .then(([err]) => {
          if(err) console.log(err);
          else {
            console.log("saveImageToPhotosAlbum success")
          }
        });
    },
    login() {
      uni.login()
        .then(([err, res]) => {
          console.log(err, res);
        })
    },
    checkSession() {
      uni.checkSession()
        .then(([err, res]) => {
          console.log(err, res);
        })
    },
    getUserInfo() {
      uni.getUserInfo()
        .then(([err, res]) => {
          console.log(err, res);
        })
    },
    opt_GetUserInfo(e) {
      console.log(e);
    },
    authorize() {
      uni.authorize({
        scope: this.authorizeText
      }).then(([err, res]) => {
        console.log(err, res);
      })
    },
    getSetting() {
      uni.getSetting()
        .then(([err, res]) => {
          console.log(err, res);
        })
    },
    openSetting() {
      uni.openSetting()
        .then(([err, res]) => {
          console.log(err, res);
        })
    }
  },
};
</script>

<style></style>
