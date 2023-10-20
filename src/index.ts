import fastify from 'fastify'

import { join } from 'path'
import { HOST, PRODUCTION } from './environment';
import fastifyAutoload from '@fastify/autoload';
import fastifyGracefulShutdown from 'fastify-graceful-shutdown';

const server = fastify({
    logger: {
        level: PRODUCTION ? 'info' : 'debug',
    },
});

void server.register(fastifyAutoload, {
    dir: join(__dirname, 'routes'),
});

void server.register(fastifyGracefulShutdown);

server.listen({ port: 8080, host: HOST }, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is listening on ${address}`);
});

server.after(() => {
    server.gracefulShutdown((_signal, next) => {
        console.log('Shutting down.');
        next();
    });
});
