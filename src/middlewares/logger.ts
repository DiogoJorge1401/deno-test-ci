import { bold, cyan, green } from 'https://deno.land/std@0.192.0/fmt/colors.ts';
import { Context, Next } from 'https://deno.land/x/oak@v12.5.0/mod.ts';

export const logger = async (context: Context, next: Next) => {
  await next();
  const rt = context.response.headers.get('X-Response-Time');
  console.log(
    `${green(context.request.method)} ${cyan(
      decodeURIComponent(context.request.url.pathname)
    )} - ${bold(String(rt))}`
  );
};
