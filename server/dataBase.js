import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    dataBase: 'mydb',
    password: 123456789,
    port: 5432
})

module.exports = pool