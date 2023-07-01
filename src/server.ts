import { bold, yellow } from 'https://deno.land/std@0.192.0/fmt/colors.ts';
import { app } from './main.ts';

if (import.meta.main) {
  app.addEventListener('listen', ({ hostname, port, serverType }) => {
    console.log(bold('Start listening on ') + yellow(`${hostname}:${port}`));
    console.log(bold('  using HTTP server: ' + yellow(serverType)));
  });

  await app.listen({ port: 3000 });
}
