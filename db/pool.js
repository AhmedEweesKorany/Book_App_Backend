const { Pool } = require("pg");
require("dotenv").config();

const db_config = {
  connectionTimeoutMillis: 300,
  idleTimeoutMillis: 200,
  max: 20,
  connectionString: process.env.DATABASE_URL, 
};

const pool = new Pool({ ...db_config });

pool.on("connect", (d) => {
  console.log("database is connected");
});

pool.on("remove", (e) => {
  console.log("Database connection removed");
});
module.exports = pool;
