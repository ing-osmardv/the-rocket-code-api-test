const mysql = require("mysql");
const config = require("./config");

const connection = mysql.createConnection(config);

const initConnection = connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
  var sql =
    "CREATE TABLE users_test_osmar_ramirez (id int NOT NULL AUTO_INCREMENT, first_name VARCHAR(255), second_name VARCHAR(255), last_name VARCHAR(255), mother_last_name VARCHAR(255), birth_date VARCHAR(255), email VARCHAR(255), phone_number VARCHAR(255), PRIMARY KEY(id))";
  connection.query(sql, function (err, result) {
    if (err) {
      console.error;
      return;
    }
    console.log("Table users_test_osmar_ramirez created");
  });
});

const query = (query) => {
    connection.query(query, function(err, result){
        if(err) throw err;
        return result;
    })
}

module.exports = {
    initConnection,
    query
};
