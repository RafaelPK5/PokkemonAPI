const express = require('express');
const app = express();
const mysql = require('/Users/Rfael/OneDrive/Área de Trabalho/PoKéDeX/Models/conectBanco');

app.use(express.json());

app.get('/maiorataque', (req,res) => {
    const query = req.query;
    try { 
        mysql.query(`SELECT nome, ataque, ataque_especial, velocidade from pokemon WHERE ataque >= '${query.ataque}'`, function(err, result){
            res.send(result);
        })
    } catch (error) {
        res.send(error);
    }
})

app.get('/maiordefesa', (req,res) => {
    const query = req.query;
    try { 
        mysql.query(`SELECT nome, defesa, defesa_especial, hp from pokemon WHERE defesa >= '${query.ataque}'`, function(err, result){
            res.send(result);
        });
    } catch (error) {
        res.send(error);
    }
})

app.listen(3001);