import { join } from 'path'

import fastifyAutoload from '@fastify/autoload';
import fastifyRateLimit from '@fastify/rate-limit';
import fastify from 'fastify'
import fastifyGracefulShutdown from 'fastify-graceful-shutdown';
import fastifyHealthcheck from 'fastify-healthcheck';

import { HOST, PRODUCTION } from './environment';

const server = fastify({
    logger: {
        level: PRODUCTION ? 'fatal' : 'debug',
    },
});

void server.register(fastifyAutoload, {
    dir: join(__dirname, 'routes'),
});

void server.register(fastifyRateLimit, {
    max: 100,
    timeWindow: '1 minute',
});

void server.register(fastifyGracefulShutdown);
void server.register(fastifyHealthcheck);

server.listen({ port: 8080, host: HOST }, (err, address) => {
    if(err) {
        server.log.fatal(err);
        process.exit(1);
    }
    server.log.fatal(`Server is listening on ${address}`);
});

server.after(() => {
    server.gracefulShutdown((_signal, next) => {
        server.log.fatal('Shutting down.');
        next();
    });
});
