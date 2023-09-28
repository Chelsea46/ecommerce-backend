const express = require("express");
const cors = require("cors");
const mysql = require('mysql2');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log('Listening on port 3000'))