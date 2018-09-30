<div align="center">
  <img width="200" height="200"
    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/musical-score_1f3bc.png">
  <h1>compose-tiny</h1>
  <p>A very tiny and fast compose function.</p>
</div>

[![CircleCI](https://img.shields.io/circleci/project/github/hipstersmoothie/compose-tiny/master.svg?style=for-the-badge)](https://circleci.com/gh/hipstersmoothie/compose-tiny/tree/master) [![Codecov](https://img.shields.io/codecov/c/github/hipstersmoothie/compose-tiny.svg?style=for-the-badge)](https://codecov.io/gh/hipstersmoothie/compose-tiny) [![npm](https://img.shields.io/npm/v/compose-tiny.svg?style=for-the-badge)](https://www.npmjs.com/package/compose-tiny) [![bundle size](http://img.badgesize.io/hipstersmoothie/compose-tiny/master/index.js.svg?style=for-the-badge)](https://www.npmjs.com/package/compose-tiny) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

> Function composition is an act or mechanism to combine simple functions to build more complicated ones.

`compose-tiny` aims to provide a simple function for composition at the smallest possible size and the fasted possible speed. It's typescript friendly too!

## Installation

```sh
npm install compose-tiny
```

## Usage

```js
const compose = require('compose-tiny');

const add = x => x + 2;
const sqr = x => x ** 2;

const blastOff = compose(
  x => `🚀 ${x} 🚀`
  sqr,
  add2
);

blastOff(2);
```

Output:

```sh
🚀 16 🚀
```

## Multiple Arguments

The first function in the composition can take multiple arguments.

```js
const compose = require('compose-tiny');

const add = x => x + 2;
const sqr = x => x ** 2;

const blastOff = compose(
  sqr,
  add2,
  (x, y, z) => (x + y) * z
);

blastOff(1, 2, 4);
```

## Performance

NOTE: bundlephobia includes all files in package

| NAME             | OPS/SEC  | RELATIVE MARGIN OF ERROR                      | SAMPLE SIZE | BUNDLE SIZE                                                |
| ---------------- | -------- | --------------------------------------------- | ----------- | ---------------------------------------------------------- |
| compose-tiny     | 1108,413 | ± 0.72%                                       | 187         | (112B)[https://bundlephobia.com/result?p=compose-tiny]     |
| squad            | 105,070  | ± 0.62% | 185         | (517B)[https://bundlephobia.com/result?p=squad]            |
| just-compose     | 46,964   | ± 1.88%                                       | 181         | (334B)[https://bundlephobia.com/result?p=just-compose]     |
| chain-function   | 22,556   | ± 0.50%                                       | 187         | (341B)[https://bundlephobia.com/result?p=chain-function]   |
| compose-function | 20,817   | ± 0.49%                                       | 186         | (1.2kB)[https://bundlephobia.com/result?p=compose-function] |
| fj-compose       | 8,581    | ± 0.61%                                       | 184         | (334B)[https://bundlephobia.com/result?p=fj-compose]       |
| compose-funcs    | 356      | ± 1.58%                                       | 176         | (594B)[https://bundlephobia.com/result?p=compose-funcs]    |

To rerun this benchmark

```sh
node benchmark
```
