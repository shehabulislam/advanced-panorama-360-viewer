const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,
  entry: {
    "blocks/panorama-viewer": path.resolve(process.cwd(), "src", "blocks", "panorama-viewer", "index.js"),
    frontend: path.resolve(process.cwd(), "src", "frontend", "panorama-viewer.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "build"),
  },
};
