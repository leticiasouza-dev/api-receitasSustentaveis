import e from "express";
const app = e();

let receita = 'Macarrão'

app.get('/', (req, res) => {
    res.json({Receita: receita})
})

app.listen(8080, () => {
    const link = 'http://localhost:8080';
    console.log(`Servidor iniciado em ${link}`);
})