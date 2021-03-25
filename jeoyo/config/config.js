require('dotenv').config();

module.exports = {
    development: {
        username: process.env.user,
        password: process.env.password,
        database: process.env.database,
        host: process.env.host,
        port: process.env.port,
        dialect: "mysql",
        operatorsAliases: 0,
    },
    production: {
        username: process.env.username,
        password: process.env.password,
        database: process.env.database,
        host: process.env.host,
        port: process.env.port,
        operatorsAliases: 0,
        logging: false,
    },
};