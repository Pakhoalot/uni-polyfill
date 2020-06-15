const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const extraPlugins = [];
if (process.env.ANALYZ === "true") {
  extraPlugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "server", // 不启动展示打包报告的http服务器
      generateStatsFile: false, // 是否生成stats.json文件,
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
    },
    plugins: extraPlugins,
  },
  lintOnSave: false,
};
