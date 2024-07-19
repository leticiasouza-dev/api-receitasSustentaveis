import bancoDeReceitas from '../database/BancodeReceitas.js';
import Receita from '../models/receita.model.js';

export const adicionarReceita = (req, res) => {
    const {nome, ingredientes, modoDePreparo, preferenciaDieta, tempoPreparo} = req.body;

    const id = bancoDeReceitas.length + 1;

    const novaReceita = new Receita(id, nome, ingredientes, modoDePreparo, preferenciaDieta, tempoPreparo);

    bancoDeReceitas.push(novaReceita);

    res.status(200).json(novaReceita);
}