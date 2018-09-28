<div align="center">
  <img width="200" height="200"
    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/musical-score_1f3bc.png">
  <h1>compose-tiny</h1>
  <p>A very tiny compose function.</p>
</div>

[![CircleCI](https://img.shields.io/circleci/project/github/hipstersmoothie/compose-tiny/master.svg?style=for-the-badge)](https://circleci.com/gh/hipstersmoothie/compose-tiny/tree/master) [![Codecov](https://img.shields.io/codecov/c/github/hipstersmoothie/compose-tiny.svg?style=for-the-badge)](https://codecov.io/gh/hipstersmoothie/compose-tiny) [![npm](https://img.shields.io/npm/v/compose-tiny.svg?style=for-the-badge)](https://www.npmjs.com/package/compose-tiny) [![bundle size](https://img.shields.io/badge/size-88%20B-44cc11.svg?style=for-the-badge)](https://www.npmjs.com/package/compose-tiny) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

> Function composition is an act or mechanism to combine simple functions to build more complicated ones.

`compose-tiny` aims to provide a simple function for composition at the smallest possible size.

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
