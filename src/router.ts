import { Router } from 'https://deno.land/x/oak@v12.5.0/mod.ts';
import { Math } from './math.ts';

const router = new Router();

router
  .get('/', (ctx) => {
    ctx.response.body = 'Hello World';
    ctx.response.status = 200;
  })
  .get('/math', (ctx) => {
    const math = new Math(10, 5);
    ctx.response.body = `Sum(10, 5): ${math.sum()}, Sub(10, 5): ${math.sub()}`;
    ctx.response.status = 200;
  });

export { router };
