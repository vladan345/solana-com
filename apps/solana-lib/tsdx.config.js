const images = require('@rollup/plugin-image');
const styles = require("rollup-plugin-styles");

module.exports = {
  rollup(config) {
    config.plugins = [
      images({ include: ['**/*.webp', '**/*.jpg'] }),
      styles({
        modules: true,
        autoModules: /\.module\.\w+$/i, // Automatically treat files ending in .module.css or .module.scss etc. as CSS modules
        use: ['sass'], // If you're using SASS/SCSS
        mode: [
          "inject",
          { container: "head", singleTag: true, prepend: true, treeshakeable: true },
        ],
      }),
      ...config.plugins,
    ];

    return config;
  },
};

