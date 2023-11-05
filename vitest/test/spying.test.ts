import { test, expect, vi } from 'vitest';
import { gretting } from './../src/lib/index';

test('gretting', () => {
  const spy = vi.spyOn(console, 'log');
  gretting('Tarek');

  expect(spy).toBeCalledWith('Hello, Tarek');
  expect(spy).toBeCalledTimes(2);
});
