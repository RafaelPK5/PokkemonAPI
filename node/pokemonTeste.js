const { json } = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('/Users/Rfael/OneDrive/Área de Trabalho/PoKéDeX/Models/conectBanco');

app.use(express.json());

app.get('/', (req,res) => {
    res.send('OK');
})

app.get('/pokemonall', (req,res) => {
    mysql.query("SELECT * FROM pokemon" , function (err,  result) {
        if(err) throw err;
        res.send(result);
    })
});

app.get('/pokebytype/', (req, res) => {
    const params = req.query;
    mysql.query(`SELECT * from pokemon WHERE peso_kg > '${params.peso_kg}'`, function(err, result){
        if(err) throw err;
        res.send(result)
    })
})

app.get('/pokebyname/:nome', (req,res) => {
    const params = req.params;
    mysql.query(`SELECT * from pokemon WHERE nome = '${params.nome}'`, function(err, result){
        if(err) throw err;
        res.send(result);
    })
})

app.listen(3001);