module.exports = (sequelize, DataTypes) =>
    sequelize.define("entry", {
        text: DataTypes.TEXT,
        user_id: DataTypes.STRING,
        date: DataTypes.DATE,
    });
