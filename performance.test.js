/* global bench */
const test = require('./benchmark/generate-test')
const compose = require('.');

const generateTests = (compose, input) => () => {
  let tests = 1000;

  while (tests--) {
    test(compose, input)();
  }
};

bench('compose(10)', () => {
  Math.floor(generateTests(compose, 10)());
});

bench('compose(1000)', () => {
  Math.floor(generateTests(compose, 1000)());
});

bench('compose(1000000)', () => {
  Math.floor(generateTests(compose, 1000000)());
});

bench('compose(10000012341234123413)', () => {
  Math.floor(generateTests(compose, 10000012341234123413)());
});
