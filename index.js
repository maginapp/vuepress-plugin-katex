const katex = require("katex");
const texmath = require("markdown-it-texmath").use(katex);
const path = require("path");

const render = new Proxy(texmath.render, {
  apply(target, key, receiver){
    let res = Reflect.apply(target, key, receiver);
    if (res) {
      res = res.replace(/<span class="([^"]*mspace[^"]*)">([^<]*)<\/span>/g, ($, $1, $2) => {
        return `<span class="${$1}">&nbsp;<\/span>`
      })
    }
    return res
  }
});

texmath.render = render

module.exports = (options = {}, context) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],

  // globalUIComponents: ['Eqn', 'Eq'],

  chainMarkdown(config) {
    config
      .plugin("katex")
      .use(texmath, [Object.assign({ delimiters: "dollars" }, options)])
  },

  name: "@maginapp/vuepress-plugin-katex",
  clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
})
