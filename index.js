module.exports = (...c) => a => {
  let s = c.length;
  while (s--) a = c[s](a);
  return a;
};
