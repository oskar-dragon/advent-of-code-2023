import * as fs from 'fs';

export function aoc01() {
  let total = 0;
  const words = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');

  words.forEach((word) => {
    const stack: number[] = [];
    word.split('').forEach((char) => {
      const possiblyNumber = Number(char);
      if (!isNaN(possiblyNumber)) {
        stack.push(possiblyNumber);
      }
    });
    total += concat(stack);
  });

  return total;
}

function concat(stack: number[]): number {
  const [firstItem, ...rest] = stack;
  const lastItem = rest.pop();
  if (stack.length === 1) {
    return Number(`${firstItem}${firstItem}`);
  }

  return Number(`${firstItem}${lastItem}`);
}
