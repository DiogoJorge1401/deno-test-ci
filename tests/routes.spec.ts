import { describe, it } from 'https://deno.land/std@0.192.0/testing/bdd.ts';
import { superoak } from 'https://deno.land/x/superoak@4.7.0/mod.ts';
import { app } from '../src/main.ts';

describe('GET /', () => {
  it('should return 200 and get `Hello World!`', async () => {
    const request = await superoak(app);

    await request.get('/').expect(200, 'Hello World!');
  });
});

describe('GET /math', () => {
  it("should return 200 and get `Sum(0, 0): 0, Sub(0, 0): 0` when doesn't pass parameters", async () => {
    const request = await superoak(app);

    await request.get('/math').expect(200, 'Sum(0, 0): 0, Sub(0, 0): 0');
  });
  it('should return 200 and get `Sum(10, 5): 15, Sub(10, 5): 5` when do pass 10 and 5 as parameters', async () => {
    const request = await superoak(app);

    await request
      .get('/math?a=10&b=5')
      .expect(200, 'Sum(10, 5): 15, Sub(10, 5): 5');
  });
});
