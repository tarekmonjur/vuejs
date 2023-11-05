import { test, expect } from 'vitest';

function sum(a: number, b: number): number {
  return a + b;
}

function sumMany(...numbers: number[]): number {
  return numbers.reduce((s, a) => {
    return s + a;
  }, 0);
}

test('1+1 will be equal 2', () => {
  expect(sum(1, 1)).toEqual(2);
});

test('1+2+3 will be equal 6', () => {
  expect(sumMany(1, 2, 3)).toEqual(6);
});

test('one number should be same', () => {
  expect(sumMany(100)).toEqual(100);
});

test('result will be 0', () => {
  expect(sumMany()).toEqual(0);
});
