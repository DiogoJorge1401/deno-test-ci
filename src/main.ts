import { Application } from 'https://deno.land/x/oak@v12.5.0/mod.ts';
import { errorHandler, logger, responseTime } from './middlewares/index.ts';
import { router } from './router.ts';

const app = new Application();

// Logger !
app.use(logger);

// Response Time
app.use(responseTime);

// Error handler
app.use(errorHandler);

// Use the router
app.use(router.routes());
app.use(router.allowedMethods());

export { app };
