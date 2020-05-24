# vuepress-plugin-katex
Katex plugin for VuePress

## Installation

```shell
yarn add -D @maginapp/vuepress-plugin-katex
# or npm install -D @maginapp/vuepress-plugin-katex
```

## Usage

### config

```js
module.exports = {
    // ...
    plugins: [
        '@maginapp/vuepress-plugin-katex',
        {
          delimiters: 'dollars'
        }
    ]
    // ...
}
```

### options

#### delimiters

* type: `string`
* default: `dollars`

User setting delimiters, [show more](https://github.com/goessner/markdown-it-texmath#features)

### `dollars` example

You can use render latex mathematical expressions [KaTeX](https://khan.github.io/KaTeX/):

Gamma公式展示 $\Gamma(n) = (n-1)!\quad\foralln\in\mathbb N$ 是通过欧拉积分

* inline

$\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.$

```md
$\Gamma(n) = (n-1)!\quad\foralln\in\mathbb N$
```

* display

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

```md
$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$
```

## Projects Using `@maginapp/vuepress-plugin-katex`

* [katex](https://github.com/KaTeX/KaTeX)
* [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath)

## issue

* Use relative path to get resources of css
