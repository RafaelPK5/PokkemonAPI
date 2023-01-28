const sequelize = require('sequelize')
const sql = require('mysql');
const conect = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567',
    database: 'pokedex'
});

module.exports = conect;