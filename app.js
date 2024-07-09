const express = require('express')
const app = express();

let receita = 'Macarrão'

app.get('/', (req, res) => {
    res.json({Receita: receita})
})

app.listen(8080, () => {
    const link = 'http://localhost:8080';
    console.log(`Servidor iniciado em ${link}`);
})