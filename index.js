const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const db = require("./config/db");

const app = express();
const port = 3000;

db.connect((error) => {
  if (error) {
    console.log('MYSQL CONNECTION ERROR: ' + error);
  } else {
    console.log('MYSQL is CONNECTED');
  }
});

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api', require('./routes/product'));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
