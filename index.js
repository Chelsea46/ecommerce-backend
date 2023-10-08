const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const db = require("./config/db");

const app = express();
const port = 5000;

db.start.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('MYSQL CONNECTED')
    }
})

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

