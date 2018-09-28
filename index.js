module.exports = (...c) => a => {
  let f;
  while ((f = c.pop())) {
    a = f.call ? f(a) : a;
  }
  return a;
};
