import { bold, yellow } from 'https://deno.land/std@0.192.0/fmt/colors.ts';
import { Application, Status } from 'https://deno.land/x/oak@v12.5.0/mod.ts';
import { errorHandler, logger, responseTime } from './middlewares/index.ts';
import { router } from './router.ts';

const app = new Application();

// Logger
app.use(logger);

// Response Time
app.use(responseTime);

// Error handler
app.use(errorHandler);

// Use the router
app.use(router.routes());
app.use(router.allowedMethods());

// A basic 404
app.use((ctx) => {
  ctx.response.body = 'Not Found';
  ctx.response.status = Status.NotFound;
});

app.addEventListener('listen', ({ hostname, port, serverType }) => {
  console.log(bold('Start listening on ') + yellow(`${hostname}:${port}`));
  console.log(bold('  using HTTP server: ' + yellow(serverType)));
});

if (import.meta.main) {
  await app.listen({ port: 3000 });
}

export { app };
