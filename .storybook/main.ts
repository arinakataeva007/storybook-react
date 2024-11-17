import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require("path");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config.module) {
      config.module = { rules: [] };
    }

    // Добавляем правило для SCSS
    config.module.rules?.push({
      test: /\.scss$/,
      use: [
        "style-loader", // Добавляет стили в DOM
        "css-loader",   // Преобразует CSS в JavaScript
        "sass-loader",  // Компилирует SCSS в CSS
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};

export default config;
