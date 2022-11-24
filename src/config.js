const mysql = require("mysql");

const config = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
}

module.exports = config;