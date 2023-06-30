import { Router } from 'https://deno.land/x/oak@v12.5.0/mod.ts';
import { Math } from './math.ts';

const router = new Router();

router
  .get('/', (ctx) => {
    ctx.response.body = 'Hello World!';
    ctx.response.status = 200;
  })
  .get('/math', (ctx) => {
    const params = ctx.request.url.searchParams;
    const a = Number(params.get('a')) || 0;
    const b = Number(params.get('b')) || 0;
    const math = new Math(a, b);
    const responseText = `Sum(${a}, ${b}): ${math.sum()}, Sub(${a}, ${b}): ${math.sub()}`;
    ctx.response.body = responseText;
    ctx.response.status = 200;
  })
  .get('/greeting', (ctx) => {
    const params = ctx.request.url.searchParams;
    const name = params.get('name') || 'World';
    ctx.response.body = `Hello, ${name}!`;
    ctx.response.status = 200;
  });

export { router };
