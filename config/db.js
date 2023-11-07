const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "chelsea",
  password: "userpassword",
  database: "ecommercedb"
});

// Connect to the database


// Export connection
module.exports = db;
