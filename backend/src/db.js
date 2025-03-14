import dotenv from "dotenv";
import mysql2 from "mysql2";

dotenv.config();

const pool = mysql2.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DB,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
})

const promisePool = pool.promise();

export default promisePool;