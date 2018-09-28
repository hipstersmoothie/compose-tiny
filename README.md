<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/musical-score_1f3bc.png" width="20%" style="margin: auto;" />

# compose-tiny

---

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

blastOff(2)
```

Output:

```sh
🚀 16 🚀
```
