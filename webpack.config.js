const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,
  entry: {
    "blocks/panorama-viewer/index": path.resolve(process.cwd(), "src", "blocks", "panorama-viewer", "index.js"),
    "blocks/panorama-viewer/frontend": path.resolve(process.cwd(), "src", "blocks", "panorama-viewer", "frontend.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "build"),
  },
};
