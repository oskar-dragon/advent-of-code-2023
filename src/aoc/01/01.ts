import * as fs from 'fs';

// Read the file and convert it into an array
// loop through the array
// loop trough each char and check if it's a number
// if it is, add it to the total
// if it is not, skip

export function aoc01() {
  let total = 0;
  const words = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');
}
