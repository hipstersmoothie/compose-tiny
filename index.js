module.exports = (...c) => a => {
  let i = c.length;

  while (i--) {
    a = c[i].call ? c[i](a) : a;
  }

  return a;
};
