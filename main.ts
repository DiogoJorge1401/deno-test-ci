import {
  bold,
  cyan,
  green,
  yellow
} from 'https://deno.land/std@0.192.0/fmt/colors.ts';
import {
  Application,
  isHttpError,
  Router,
  Status
} from 'https://deno.land/x/oak@v12.5.0/mod.ts';
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

const app = new Application();

// Logger
app.use(async (context, next) => {
  await next();
  const rt = context.response.headers.get('X-Response-Time');
  console.log(
    `${green(context.request.method)} ${cyan(
      decodeURIComponent(context.request.url.pathname)
    )} - ${bold(String(rt))}`
  );
});

// Response Time
app.use(async (context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  context.response.headers.set('X-Response-Time', `${ms}ms`);
});

// Error handler
app.use(async (context, next) => {
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
});

// Use the router
app.use(router.routes());
app.use(router.allowedMethods());

// A basic 404 page
app.use((ctx) => {
  ctx.response.body = 'Not Found';
  ctx.response.status = Status.NotFound;
});

app.addEventListener('listen', ({ hostname, port, serverType }) => {
  console.log(bold('Start listening on ') + yellow(`${hostname}:${port}`));
  console.log(bold('  using HTTP server: ' + yellow(serverType)));
});

await app.listen({ hostname: '127.0.0.1', port: 3000 });

console.log('Server running on port 3000');
