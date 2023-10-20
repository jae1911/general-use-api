import fastify from 'fastify'

import { join } from 'path'
import { HOST, PRODUCTION } from './environment';
import fastifyAutoload from '@fastify/autoload';

const server = fastify({
    logger: !PRODUCTION,
});

void server.register(fastifyAutoload, {
    dir: join(__dirname, 'routes'),
});

server.listen({ port: 8080, host: HOST }, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is listening on ${address}`);
});
