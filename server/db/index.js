import pg from "pg";
// import { db } from "../config.js";

console.log(process.env.DB_USER);
console.log(process.env.TESTING);
console.log("test env");

const pool = new pg.Pool({
  user: "kumdgfstlkvksq",
  host: "ec2-34-242-8-97.eu-west-1.compute.amazonaws.com",
  database: "d1cphs6k1u9600",
  password: "e17b622e7d77b57e2f2406919564cd648c7e3fa050c2ed09074ea3cf8a875748",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
