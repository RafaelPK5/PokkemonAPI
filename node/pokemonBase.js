const express = require('express');
const app = express();
const mysql = require('/Users/Rfael/OneDrive/Área de Trabalho/PoKéDeX/Models/conectBanco');

app.use(express.json());

app.get('/pokemonall', (req,res) => {
    try {
        mysql.query("SELECT * FROM pokemon" , function (err,  result) {
            res.send(result);
        })
    } catch (error) {
        res.send(error);
    }
});

app.get('/pokebytype', (req, res) => {
    const query = req.query;
    try {
        mysql.query(`SELECT * from pokemon WHERE tipo1 = '${query.tipo1}'`, function(err, result){
            res.send(result)
        })
    } catch (error) {
        res.send(error);
    }
})

app.get('/pokebyname/', (req,res) => {
    const query = req.query;
    try { 
        mysql.query(`SELECT * from pokemon WHERE nome = '${query.nome}'`, function(err, result){
            res.send(result);
        })
    } catch (error) {
        res.send(error);
    }
})

app.get('/generation', (req,res) => {
    const query = req.query;
    try { 
        mysql.query(`SELECT numero, nome, tipo1, tipo2, geracao, taxa_captura from pokemon WHERE geracao = '${query.geracao}'`, function(err, result){
            res.send(result);
        })
    } catch (error) {
        res.send(error);
    }
})

app.get('/legendary', (req,res) => {
    const query = req.query;
    try { 
        mysql.query(`SELECT * from pokemon WHERE lendario = '1'`, function(err, result){
            res.send(result);
        })
    } catch (error) {
        res.send(error);
    }
})

app.get('/catchrate', (req,res) => {
    const query = req.query;
    try {
        mysql.query(`SELECT numero, nome, geracao, tipo1, tipo2, taxa_captura FROM pokemon WHERE taxa_captura >= '${query.taxa_captura}'`, function(err, result){
            res.send(result);
        })
    } catch (error) {
        res.send(error);
    }
})
app.listen(3001);