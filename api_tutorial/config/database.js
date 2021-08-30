require("dotenv").config();

module.exports = {
    development: {
        username: process.env.PG_USERNAME = postgres,
        password: process.env.PG_PASSWORD = 123456,
        database:  process.env.PG_DATABASE = tutorial_bd,
        host:  process.env.PG_HOST = localhost,
        port:  process.env.PG_PORT = 5432,
        dialect:  process.env.BD_DIALECT = postgres,
        logging: false,
        define: {
            underscored: true
        }
    }
};
