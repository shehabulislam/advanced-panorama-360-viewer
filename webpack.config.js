const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const ESLintPlugin = require("eslint-webpack-plugin");

const plugins = defaultConfig.plugins.filter((p) => {
  if (Object.values(p).length === 2 && Object.values(p)?.[1]["filename"] && Object.values(p)?.[1]["filename"] === "[name]-rtl.css") {
    return false;
  }
  return true;
});

// const defaultEntry = Object.fromEntries(Object.entries(defaultConfig.entry()).filter(([key, __]) => !key.includes("index")));

const entry = {
  ...defaultConfig.entry(),
  // "blocks/panorama-viewer/index": path.resolve(process.cwd(), "src", "blocks", "panorama-viewer", "index.js"),
  // "blocks/panorama-viewer/frontend": path.resolve(process.cwd(), "src", "blocks", "panorama-viewer", "frontend.js"),
};

module.exports = {
  ...defaultConfig,
  entry,
  plugins: [...plugins, new ESLintPlugin()],
  optimization: {},
  // output: {
  //   filename: "[name].js",
  //   path: path.resolve(process.cwd(), "build"),
  // },
};
