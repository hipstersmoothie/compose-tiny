const compose = require('.');

const add = x => y => x + y;
const sqr = x => x ** 2;
const add1 = add(1);
const add2 = add(2);

test('should compose functions', () => {
  const testFunction = compose(
    sqr,
    add2
  );

  expect(testFunction(2)).toBe(16);
});

test("should error when a function isn't passed", () => {
  const testFunction = compose(
    sqr,
    new Date(),
    add2
  );

  expect(() => testFunction(2)).toThrow();
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

test('should allow multiple args to first functions', () => {
  const testFunction = compose(
    sqr,
    add2,
    (x, y) => x * y
  );

  expect(testFunction(2, 4)).toBe(100);
  expect(testFunction(2, 7)).toBe(256);
});
