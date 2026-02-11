import { describe, it, expect } from 'vitest';
import { sumArray } from './sumArray';

describe('sumArray', () => {
  it('should return the sum of a classic array', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

  it('should return 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });
});
