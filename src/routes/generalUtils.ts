import { FastifyPluginCallback } from 'fastify';
import { textToRainbow } from '../utils/textUtils';
import { ColourQuery } from '../types/colourQuery';

const plugin: FastifyPluginCallback = (fastify, opts, next): void => {
    fastify.get('/utils/colour', async (req, res) => {
        const query = req.query as ColourQuery;

        if (!query.text || !query.startColour || !query.endColour)
            await res.send('error; check parameters');

        const colouredText = textToRainbow(query.text as string, query.startColour as string, query.endColour as string);

        await res.send(colouredText);
    });    

    next();
}

export default plugin;
