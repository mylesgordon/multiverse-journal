const { Sequelize, DataTypes } = require("sequelize");
const server = require("fastify")({ logger: true });
const auth0 = require("fastify-auth0-verify");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "data.db",
});
const Entry = require("./model")(sequelize, DataTypes);

server.register(auth0, {
    domain: "https://dev-oznje2my.us.auth0.com/",
    audience: "multiverse-messages",
});

server.register(require("@fastify/cors"), {
    origin: true,
});

server.register(
    (instance, _options, done) => {
        instance.get("/entry", {
            handler: async (req, res) => {
                const { user_id } = req.query;
                res.send(await Entry.findAll({ where: { user_id } }));
            },
            preValidation: instance.authenticate,
        });

        instance.post("/entry", {
            handler: async (req, res) => {
                const { text, user_id } = req.body;
                await Entry.create({ text, user_id });
            },
            preValidation: instance.authenticate,
        });

        done();
    },
    { prefix: "/api/v1" }
);

const start = async () => {
    try {
        await sequelize.authenticate();
        Entry.sync();

        await server.listen(3001);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
