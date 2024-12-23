const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: "production", //режим сборки(production оптимизирует код для размера и производительности)
  entry: "./src/index.ts", //точка входа
  output: {
    filename: "index.js", //файл точки после билдинга ts
    libraryTarget: "umd", //создает универсальный модуль UMD для использования проекта в других проектах
    path: path.resolve(__dirname, "dist"), //куда билдим либу
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: {
    react: "react",
  },
  module: {  
    rules: [ //правила обработки различных типов
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,  // В зависимости от режима используем нужный загрузчик
          "css-loader", 
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', 
        include: path.resolve(__dirname, 'storybook-react/src/assets')
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ 
      filename: '[name].css',
    }),
  ],
};
