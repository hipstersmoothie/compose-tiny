const ora = require('ora');
const Benchmark = require('benchmark');
const debug = require('logdown')('compose');
const Table = require('cli-table2');

const generateTest = require('./generate-test');
const compose = require('..');
const composeFunction = require('compose-function');
const justCompose = require('just-compose');
const fjCompose = require('fj-compose');
const chainFunction = require('chain-function');
const squad = require('squad');
const composeFuncs = require('compose-funcs');
const composing = require('composing');

let spinner = ora('Running benchmark');
const benchmark = new Benchmark.Suite('compose');
const INPUT = 100;
const results = [];

function showResults(benchmarkResults) {
  const table = new Table({
    head: ['NAME', 'OPS/SEC', 'RELATIVE MARGIN OF ERROR', 'SAMPLE SIZE']
  });
  benchmarkResults.forEach(result => {
    table.push([
      result.target.name,
      result.target.hz.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      `± ${result.target.stats.rme.toFixed(2)}%`,
      result.target.stats.sample.length
    ]);
  });
  console.log(table.toString());
}

function sortDescResults(benchmarkResults) {
  return benchmarkResults.sort((a, b) => (a.target.hz < b.target.hz ? 1 : -1));
}

function onCycle(event) {
  results.push(event);
  spinner.succeed(event.target.name);
  spinner = ora('Running benchmark');
  spinner.start();
}

function onComplete() {
  spinner.stop();
  debug.log();

  const orderedBenchmarkResults = sortDescResults(results);
  showResults(orderedBenchmarkResults);
}

spinner.start();

const defaultOptions = { minSamples: 100 };

benchmark
  .add('compose-tiny', generateTest(compose, INPUT), defaultOptions)
  .add('squad', generateTest(squad, INPUT), defaultOptions)
  .add('compose-function', generateTest(composeFunction, INPUT), defaultOptions)
  .add('just-compose', generateTest(justCompose, INPUT), defaultOptions)
  .add('fj-compose', generateTest(fjCompose, INPUT), defaultOptions)
  .add('chain-function', generateTest(chainFunction, INPUT), defaultOptions)
  .add('compose-funcs', generateTest(composeFuncs, INPUT), defaultOptions)
  .add('composing', generateTest(composing, INPUT), defaultOptions)
  .on('cycle', onCycle)
  .on('complete', onComplete)
  .run({ async: true });
