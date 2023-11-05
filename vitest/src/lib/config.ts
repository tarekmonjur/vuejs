import { readFileSync } from 'fs';

export const loadConfig = () => {
  return JSON.parse(readFileSync('./tsconfig.json', 'utf-8'));
};
