import { assertEquals } from 'https://deno.land/std@0.192.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.192.0/testing/bdd.ts';
import { Math } from './math.ts';

describe('Math', () => {
  const math = new Math(1, 2);

  it('sum should return 3 when passed 1 and 2', () => {
    const actual = math.sum();
    const expected = 3;
    assertEquals(actual, expected);
  });

  it('sub should return -1 when passed 1 and 2', () => {
    const actual = math.sub();
    const expected = -1;
    assertEquals(actual, expected);
  });
});
