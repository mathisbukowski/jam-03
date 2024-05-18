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

fastify.get("/getCachedData", async (req, res) => {
    const data = api.cache.data;

    res.send(data);
});

fastify.get("/getAllData", async (req, res) => {
    const data = await api.get_all_data();

    res.send(data);
})

fastify.get("/status", async (req, res) => {
    const startHrTime = process.hrtime();
    await fetch(`http://localhost:${process.env.PORT}/api/`)
        .then(() => {
            const elapsedHrTime = process.hrtime(startHrTime);
            const latency = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
            res.send({latency: latency});
        }).catch((e) => {
            res.status(500).send({ error: "Cannot fetch API to get latency." });
        });
})

fastify.listen({ port: process.env.PORT }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
