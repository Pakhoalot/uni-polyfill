const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const extraPlugins = [];
if (process.env.ANALYZ === "true") {
  extraPlugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      generateStatsFile: false,
      openAnalyzer: true,
    })
  );
}
module.exports = {
  configureWebpack: {
    devServer: {
      clientLogLevel: "info",
      proxy: {
        "/cors": {
          target: "https://wxapp.dev.faisco.com.cn",
          pathRewrite: { "^/cors": "" },
        },
      },
      // 在使用内网穿透时需要使用这个值来规避invalid host header的错误
      disableHostCheck: true,
    },
    plugins: extraPlugins,
    resolve: {
      // 为了引入uniapp内置的promisify, 只能通过引用改写uni-shared引用到uni-h5/src目录下的shared了
      alias: {
        "uni-shared": "@dcloudio/uni-h5/src/shared"
      }
    },
  },
  lintOnSave: false,
};
