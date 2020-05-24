const katex = require("katex");
const texmath = require("markdown-it-texmath").use(katex);
const path = require("path");

module.exports = (options = {}, context) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],

  globalUIComponents: ['Eqn', 'Eq'],

  chainMarkdown(config) {
    config
      .plugin("katex")
      .use(texmath, [Object.assign({ delimiters: "dollars" }, options)])
  },

  name: "@maginapp/vuepress-plugin-katex",
  clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
})
