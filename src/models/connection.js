require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: process.env.SQL_HOST,
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	database: process.env.SQL_DATABASE });

module.exports = connection;