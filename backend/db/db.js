const {POOL} = require('pg');

const pool = ({
    connectionString: process.env.DATABASE_CONNECTION,
    max: 20,
    idleTimeoutMillis: 30000,
})

module.exports = {
    query: (text, params) => pool.query(text, params)
};