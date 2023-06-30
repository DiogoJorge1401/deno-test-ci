import {
  Context,
  Next,
  isHttpError
} from 'https://deno.land/x/oak@v12.5.0/mod.ts';

export const errorHandler = async (context: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      context.response.status = err.status;
      const { message, status, stack } = err;
      if (context.request.accepts('json')) {
        context.response.body = { message, status, stack };
        context.response.type = 'json';
      } else {
        context.response.body = `${status} ${message}\n\n${stack ?? ''}`;
        context.response.type = 'text/plain';
      }
    } else {
      console.log(err);
      throw err;
    }
  }
};