import Fastify from 'fastify'
import 'dotenv/config'
import api from './api/api.js';

const fastify = Fastify({
    logger: true
})


fastify.get('/', (req, res) => {
    res.send({ status: 'Ok.' })
});

fastify.get('/getData/:countryCode', async (req, res) => {
    const countryCode = req.params.countryCode;

    if (!countryCode)
        return res.status(400).send("Missing parameter.");
    let data = await api.get_country_data(countryCode);
    res.send(data);
});


fastify.listen({ port: process.env.PORT }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
