import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
export const pool = mysql.createPool({
  host: process.env.DATABASEHOST,
  user: process.env.DATABASEUSER, 
  password: process.env.DATABASEPASSWORD,
  database: process.env.DATABASENAME
});

const promiseConnection = pool.promise();
