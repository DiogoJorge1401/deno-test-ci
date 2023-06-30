import { describe, it } from 'https://deno.land/std@0.192.0/testing/bdd.ts';
import { superoak } from 'https://deno.land/x/superoak@4.7.0/mod.ts';
import { app } from '../src/app.ts';

describe('GET /', () => {
  it('should return 200 and get `Hello World!`', async () => {
    const request = await superoak(app);

    await request.get('/').expect(200, 'Hello World!');
  });
});

describe('GET /math', () => {
  it('should return 200 and get `Sum(10, 5): 15, Sub(10, 5): 5`', async () => {
    const request = await superoak(app);

    await request.get('/math').expect(200, 'Sum(10, 5): 15, Sub(10, 5): 5');
  });
});
