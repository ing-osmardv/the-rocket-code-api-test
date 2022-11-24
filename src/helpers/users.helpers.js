const mysql = require('mysql');
const { query } = require('../db');

const createUserHelper = (input) => {
    const insertQuery = `INSERT INTO users_test_osmar_ramirez (first_name, second_name, last_name, mother_last_name, birth_date, email, phone_number) VALUES ('${input?.first_name}', '${input?.second_name}', '${input?.last_name}', '${input?.mother_last_name}', '${input?.birth_date}', '${input?.email}', '${input?.phone_number}' );`
    const result = query(insertQuery);
    return result;
}

module.exports = {
    createUserHelper
}