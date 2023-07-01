import { Context, Next } from 'https://deno.land/x/oak@v12.5.0/mod.ts';

export const errorHandler = async (context: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    context.response.status = err.status;
    const { message, status, stack } = err;
    context.response.body = { message, status, stack };
    context.response.type = 'json';
  }
};
