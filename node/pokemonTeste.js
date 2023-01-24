const express = require('express');
const app = express();
const mysql = require('/Users/Rfael/OneDrive/Área de Trabalho/PoKéDeX/Models/conectBanco');

app.get('/', (req,res) => {
    res.send('OK');
})

app.get('/pokemon', async (req,res) => {
   console.log('funciona')
    mysql.connect(function(err){
        if(err) throw err;
    mysql.query("SELECT * FROM pokemon WHERE tipo1 = 'fire' AND tipo2 = 'lutador'" , function (err,  result) {
        if(err) throw err;
        let parse = JSON.stringify(result)
        console.log("Result: "+parse);
        res.send("Result = "+parse)
    })
});
})

app.listen(5000);