const { Sequelize, DataTypes } = require("sequelize");
const server = require("fastify")({ logger: true });

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "data.db",
});
const Entry = require("./model")(sequelize, DataTypes);

server.get("/entry", async (req, res) => {
    return Entry.findAll();
});

server.post("/entry", async (req, res) => {
    const { text } = req.body;
    Entry.create({ text, user_id: "test123" });
    return "";
});

server.get("/", async (req, res) => {
    return { hello: "world" };
});

const start = async () => {
    try {
        await sequelize.authenticate();
        Entry.sync();

        await server.listen(3001);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
