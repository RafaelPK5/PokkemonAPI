const sequelize = require('sequelize')
const sql = require('mysql');
const conect = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567',
    database: 'pokedex'
});
//const conect = new sequelize("pokedex" , "root", "1234567", {host: 'localhost', dialect: 'mysql'})

module.exports = conect;