module.exports = (...c) => a =>
  c.filter(f => f.call).reduceRight((r, f) => f(r), a);
