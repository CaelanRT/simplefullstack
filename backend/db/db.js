const {Pool} = require('pg');

const pool = new Pool ({
    connectionString: process.env.DATABASE_CONNECTION,
    max: 20,
    idleTimeoutMillis: 30000,
})



module.exports = pool;