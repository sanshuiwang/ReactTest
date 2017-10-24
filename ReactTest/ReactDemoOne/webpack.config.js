//使用 Node.js 的 path 模块
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = { //注意这里是exports不是export
  //source maps提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。
  //在学习阶段和写中、小型项目的时候，用eval-source-map，如果是开发大型项目可以用cheap-module-eval-source-map，会更快。
  devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map
  entry: [
    'webpack/hot/dev-server.js',
    path.resolve(__dirname, "app/main.js")
  ], //唯一入口文件，就像Java中的main方法
  output: { //输出目录
    path: path.resolve(__dirname, "build"), //打包后的js文件存放的地方
    filename: "js/bundle.js" //打包后的js文件名
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        loader: 'babel-loader',
        include: path.resolve(__dirname, "app"),
        exclude: path.resolve(__dirname, "node_modules")
      }
    ]
  },
  //webpack-dev-server配置
  devServer: {
    contentBase: './build', //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    hot: true,
    compress: true,
    inline: true, //设置为true，当源文件改变时会自动刷新页面
    port: 5555 //设置默认监听端口，如果省略，默认为"8080"
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html', //打包后的filename:'index-[hash].html',
      template: 'index.html', //模板
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(), //热模块替换插件
    new webpack.optimize.UglifyJsPlugin()
  ]
};
