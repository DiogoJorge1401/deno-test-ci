import { assertEquals } from 'https://deno.land/std@0.192.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.192.0/testing/bdd.ts';
import { sub, sum } from './math.ts';

describe('math.ts', () => {
  it('should return 3 when passed 1 and 2', () => {
    const actual = sum(1, 2);
    const expected = 3;
    assertEquals(actual, expected);
  });

  it('should return -2 when passed -1 and 1', () => {
    const actual = sub(-1, 1);
    const expected = -2;
    assertEquals(actual, expected);
  });
});
