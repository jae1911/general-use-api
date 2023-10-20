import { FastifyPluginCallback } from 'fastify';

const plugin: FastifyPluginCallback = (fastify, opts, next): void => {

    fastify.get('/', async (req, res) => {
        await res.send('ok');
    });

    next();
}

export default plugin;
