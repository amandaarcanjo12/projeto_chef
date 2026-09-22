import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();

//Cria uma conexão com um banco de dados PostgreSQL em Node.js
const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME
});

//frufru para segurança
export const query = (text, params) => pool.query(text, params);



