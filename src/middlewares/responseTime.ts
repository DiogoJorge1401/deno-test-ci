import { Context, Next } from 'https://deno.land/x/oak@v12.5.0/mod.ts';

export const responseTime = async (context: Context, next: Next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  context.response.headers.set('X-Response-Time', `${ms}ms`);
};
