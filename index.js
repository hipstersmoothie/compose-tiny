module.exports = (...c) => a => {
  let s = c.length;
  while (s--) a = c[s].call ? c[s](a) : a;
  return a;
};
