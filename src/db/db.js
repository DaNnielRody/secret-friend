import { Sequelize } from "sequelize";

const sequelize = new Sequelize('amigo-secreto', 'user', '123', {
    host: 'localhost',
    dialect: "mysql",
});

export default sequelize;