import { describe, it, expect, test } from 'vitest';
import { deepMerge } from '../src/lib/index';

describe('shallow merge', () => {
  describe('merge two object data', () => {
    it('merge without overlap', () => {
      const results = deepMerge({ firstName: 'tarek' }, { lastName: 'monjur' });
      expect(results).toEqual({ firstName: 'tarek', lastName: 'monjur' });
    });

    it('merge with overlaps', () => {
      const results = deepMerge(
        { firstName: 'tarek', github: 'unknown' },
        { lastName: 'monjur', github: 'tarekmonjur' },
      );
      expect(results).toEqual({ firstName: 'tarek', lastName: 'monjur', github: 'tarekmonjur' });
    });
  });

  describe('merge two array data', () => {
    it('merge without overlap', () => {
      const results = deepMerge(['react', 'vue'], ['express', 'nest']);
      expect(results).toEqual(['react', 'vue', 'express', 'nest']);
    });
  });
});

describe('deep merge', () => {
  it('merge with overlap', () => {
    const results = deepMerge(
      { name: 'tarek', accounts: { github: 'tarekmonjur' } },
      { accounts: { twitter: 'tarek' } },
    );
    expect(results).toEqual({
      name: 'tarek',
      accounts: { github: 'tarekmonjur', twitter: 'tarek' },
    });
  });

  it('snapshorts merge with overlap', () => {
    const results = deepMerge(
      { name: 'tarek', accounts: { github: 'tarekmonjur' }, language: ['js'] },
      { accounts: { twitter: 'tarek' }, language: ['vue'] },
    );
    expect(results).toMatchSnapshot();
  });
});

test.fails('throw error on merge two different types', () => {
  const results = deepMerge(['foo', 'bar'], { foo: 'bar' });
  expect(results).toEqual({ 0: 'foo', 1: 'bar', foo: 'bar' });
});

test('Can not merge different types', () => {
  expect(() => deepMerge(['foo', 'bar'], { foo: 'bar' })).toThrowError(
    'Can not merge different types',
  );
});
