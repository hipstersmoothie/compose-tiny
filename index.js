module.exports = (...c) => (...a) => {
  let i = c.length - 1;
  a = c[i](...a);
  while (i--) a = c[i](a);
  return a;
};
