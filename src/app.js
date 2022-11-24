const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const { initConnection } = require("./db");
initConnection;

app.use('/users', require('./routes/users.routes'));

app.listen(3000, () => {
  console.log("Server is running port: 3000");
});
