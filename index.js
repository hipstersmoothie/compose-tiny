module.exports = (...c) => a =>
  c.filter(f => typeof f === 'function').reduceRight((r, f) => f(r), a);
