import Fastify from 'fastify'
import 'dotenv/config'

const fastify = Fastify({
  logger: true
})

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: process.env.PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
