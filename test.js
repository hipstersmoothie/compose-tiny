const compose = require('.');

const add = x => y => x + y;
const sqr = x => x ** 2;
const add1 = add(1);
const add2 = add(2);

test('composes functions', () => {
  const testFunction = compose(
    sqr,
    add2
  );

  expect(testFunction(2)).toBe(16);
});

test('filters non functions', () => {
  const testFunction = compose(
    sqr,
    1,
    new Date(),
    {},
    true,
    add2
  );

  expect(testFunction(2)).toBe(16);
});

test('should work with different combinations', () => {
  expect(
    compose(
      sqr,
      add1
    )(2)
  ).toBe(sqr(add1(2)));
  expect(sqr(add1(2))).toBe(9);
  expect(
    compose(
      sqr,
      add1
    )(2)
  ).toBe(9);
});

test('should be able to use function multiple times', () => {
  const testFunction = compose(
    sqr,
    add2
  );

  expect(testFunction(2)).toBe(16);
  expect(testFunction(2)).toBe(16);
});
