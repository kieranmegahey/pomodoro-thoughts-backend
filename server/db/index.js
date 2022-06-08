import pg from "pg";
import * as config from "../config.js";

console.log(process.env.DB_USER);
console.log(process.env.TESTING);
console.log("test env");

const pool = new pg.Pool({
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_DATABASE,
  password: config.DB_PASSWORD,
  port: config.DB_PORT,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
