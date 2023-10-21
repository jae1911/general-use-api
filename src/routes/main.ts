import { FastifyPluginCallback } from 'fastify';

import { NODE } from '../environment';

const plugin: FastifyPluginCallback = (fastify, opts, next): void => {

    fastify.get('/', async (_req, res) => {
        await res.send('ok');
    });

    fastify.get('/meta/version', async (_req, res) => {
        await res.send({
            'name': 'gapi',
            'node': NODE,
            'version': 1,
        });
    });

    next();
}

export default plugin;
