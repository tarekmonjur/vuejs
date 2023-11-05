export const deepMerge = <T, T1 extends T>(a: T, b: T): Partial<T1> => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b] as T1;
  }

  const aType = Array.isArray(a) ? 'array' : 'object';
  const bType = Array.isArray(b) ? 'array' : 'object';
  if (aType !== bType) {
    throw new Error('Can not merge different types');
  }

  type mergeData = Partial<Record<any, any | T | T1>>;
  const merged = { ...a } as mergeData;

  for (const k of Object.keys(b as mergeData) as (keyof T)[]) {
    if (typeof a[k] === 'object' || Array.isArray(a[k])) {
      merged[k] = deepMerge(a[k], b[k]);
    } else {
      merged[k] = b[k];
    }
  }
  return merged;
};

export const gretting = (name: string) => {
  console.log('Hello, ' + name);
  console.log('Hi, ' + name);
};
