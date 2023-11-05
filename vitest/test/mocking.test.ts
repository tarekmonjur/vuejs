import { it, expect, vi, describe, beforeEach } from 'vitest';
import { loadConfig } from '../src/lib/config';

vi.mock('node:fs', async () => {
  const actual = await vi.importActual('node:fs');
  return {
    ...actual,
    readFileSync: vi.fn().mockReturnValue('{"name": "Tarek"}'),
  };
});

describe('test', () => {
  beforeEach(() => {
    vi.mock('node:fs', async () => {
      const actual = await vi.importActual('node:fs');
      return {
        ...actual,
        readFileSync: vi.fn().mockReturnValue('{"name": "Tarek"}'),
      };
    });
  });
  it('mock with fs', async () => {
    // const result = loadConfig();
    // expect(result).toEqual({ name: 'Tarek' });
  });
});

// it('mock with fs', async () => {
//   const result = loadConfig();
//   expect(result).toEqual({ name: 'Tarek' });
// });
