const express = require("express");
const app = express();
const cors = require("cors");
//CREATE PORT
const port = 3003;

const { Pool } = require("pg");

//DB POSTGRES
const pool = new Pool({
  user: "postgres",
  password: "1111",
  host: "localhost",
  port: 5432,
  database: "postgres",
});

app.use(cors());
app.use(express.json());

//GET
app.get("/users", (req, res) => {
  pool.query(`SELECT * FROM "add_users"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});
//POST
app.post("/add_users", (req, res) => {
  console.log(req.body);
  const { id, name, lastname, role, phone, img } = req.body;
  pool.query(
    `INSERT INTO "add_users" ("id", "name", "lastname", "role", "phone","img") VALUES($1, $2, $3, $4, $5, $6)`,
    [id, name, lastname, role, phone, img],
    (error, results) => {
      if (error) throw error;
      res.status(201).json("");
    }
  );
});
//DELETE
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `DELETE FROM "add_users" WHERE "id"= $1`,
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("user deleted!");
    }
  );
});

//LISTENING PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
