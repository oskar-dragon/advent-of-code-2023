import { results } from './aoc';

results.forEach((func) => {
  console.log(func.name, 'Result:', func());
});
