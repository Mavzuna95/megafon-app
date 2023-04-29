const express = require("express");
const app = express();
const cors = require("cors");
const port = 3003;

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "1111",
  host: "localhost",
  port: 5432,
  database: "megabook",
});

app.use(cors());
app.use(express.json());

//GET
app.get("/categories", (req, res) => {
  pool.query(`SELECT * FROM "categories"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});

//LISTENING PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
