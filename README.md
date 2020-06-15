# 轻站特供uniapp模板

## 用法

### HBuilderX项目迁移
1. 将uniapp-boilerplate克隆到你的机器上
2. 将原本使用HBuilderX生成的项目的根目录下的文件全部复制到src下
3. 将原项目根目录下的package.json, 合并到新项目的根目录下的package.json
4. 打开vscode或其他可用编辑器, npm/yarn安装依赖, 安装eslint, prettier, editorconfig, vetur插件
5. 开始愉快编程
### 小程序开发(微信小程序为例)
1. 使用vscode或其他可用编辑器打开可用的基于uniapp-boilerplate项目
2. 命令行进入到项目目录下, 输入命令npm run dev:mp-weixin
3. 打开微信开发者工具, 将项目下dist/wp-weixin目录导入到开发者工具
4. 开始愉快编程
### H5端开发
1. 使用vscode或其他可用编辑器打开可用的基于uniapp-boilerplate项目
2. 使用代理或其他方式解决跨域问题, 下面内容有涉及
3. 命令行进入到项目目录下, 输入命令npm run dev:h5
4. 打开微信开发工具, 调整到公众号网页开发(使用微信开发工具是因为未来项目里可能引入微信h5端特有的api和SDK, 普通浏览器打开可能会报错)
5. 输入域名localhost:8080(或你自己配置的端口)
6. 开始愉快编程
### 我还是想使用HBuilderX
1. 将基于uniapp-boilerplate项目下的.editorconfig, package.json, vue.config.js复制到src内
2. 将src作为项目根目录导入到HBuilderX
3. 开始和原来一摸一样的编程体验, 你将得到: 统一的缩进和换行符, 你将失去, 统一的lint和格式化, 命令行调用.
目的
