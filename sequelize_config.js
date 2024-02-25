require('dotenv').config({path: './db.env'});

const Db = {
    url:process.env.DATABASE_URL
};

module.exports = {
    development: Db,
    test: Db,
    production: Db,
    staging: Db,
};