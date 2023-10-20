import { FastifyPluginCallback } from 'fastify';

import { ColourQuery } from '../types/colourQuery';
import { textToRainbow } from '../utils/textUtils';

const plugin: FastifyPluginCallback = (fastify, opts, next): void => {
    fastify.get('/utils/colour', async (req, res) => {
        const query = req.query as ColourQuery;

        if (!query.text || !query.startColour || !query.endColour)
            await res.send('error; check parameters');

        const colouredText = textToRainbow(query.text, query.startColour, query.endColour);

        await res.send(colouredText);
    });    

    next();
}

export default plugin;
