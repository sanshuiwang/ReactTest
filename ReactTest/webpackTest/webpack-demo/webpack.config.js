var path = require('path');
//引用插件
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //webpack打包入口
  entry: './src/app.js',
  //  entry: ['./src/script/main.js', './src/script/a.js']
  // entry: {
  //   main: "./src/script/main.js",
  //   a: "./src/script/a.js",
  //   b: "./src/script/b.js",
  //   c: "./src/script/c.js"
  // },
  //打包文件放的位置
  output: {
    //注意整个配置中我们使用 Node 内置的 path 模块，并在它前面加上 __dirname这个全局变量。
    //可以防止不同操作系统之间的文件路径问题，
    //并且可以使相对路径按照预期工作。
    path: path.resolve(__dirname, "dist"),
    //生成的js文件名
    filename: "js/[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, "src"),
        exclude: path.resolve(__dirname, "node_modules"),
        options: {
          presets: ["latest"]
        }
      },
      {
        test: /\.html$/,
        loader:"html-loader"
      },
      {
        test: /\.less$/,
        //use可为loader加入选项
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader'
          },
          "less-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,    //小于8K的图片将直接以base64的形式内联在代码中，可以减少一次http请求。
              name: 'assets/[name]-[hash:5].[ext]'
            }
          },
          {
            loader: "image-webpack-loader",
          }
        ]
      },
      {
        test: /\.css$/,
        //use可为loader加入选项
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}
