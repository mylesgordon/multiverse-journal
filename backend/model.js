module.exports = (sequelize, DataTypes) =>
    sequelize.define("Entry", {
        text: DataTypes.TEXT,
        user_id: DataTypes.STRING,
    });
