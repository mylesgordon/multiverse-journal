const { Sequelize } = require('sequelize');

const server = require('fastify')({ logger: true });
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data.db'
});

server.get('/', async (req, res) => {
    return { hello: 'world' };
});

const start = async () => {
    try {
        await sequelize.authenticate();
        await server.listen(3001);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();