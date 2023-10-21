import { FastifyPluginCallback } from 'fastify';

import { ColourQuery } from '../types/colourQuery';
import { FontQuery } from '../types/fontQuery';
import { allAsciiFonts, textToAscii, textToRainbow } from '../utils/textUtils';

const plugin: FastifyPluginCallback = (fastify, opts, next): void => {
    fastify.get('/utils/colour', async (req, res) => {
        const query = req.query as ColourQuery;

        if (!query.text || !query.startColour || !query.endColour)
            await res.send('error; check parameters').code(400);

        const colouredText = textToRainbow(query.text, query.startColour, query.endColour);

        await res.send(colouredText);
    });

    fastify.get('/utils/ascii', async (req, res) => {
        const query = req.query as FontQuery;

        if (!query.text || !query.font)
            await res.send('error; check parameters').code(400);

        await res.send(textToAscii(query.text, query.font));
    });

    fastify.get('/utils/ascii/fonts', async (_req, res) => {
        await res.send(allAsciiFonts());
    });

    next();
}

export default plugin;
