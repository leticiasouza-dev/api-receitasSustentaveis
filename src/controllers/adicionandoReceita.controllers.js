import bancoDeReceitas from '../database/BancodeReceitas.js';
import Receita from '../models/receita.model.js';

export const adicionarReceita = (req, res) => {
    try{
        const {nome, ingredientes, modoDePreparo, preferenciaDieta, tempoPreparo} = req.body;

        // tratamento de erro para o nome
        if(!nome || typeof nome !== 'string' || nome.trim() === ''){
            return res.status(400).json({erro: "O campo deverá se chamar nome, é obrigatório e deverá ser uma string" });
        }

        // tratamento de erro para os ingredientes
        if(!ingredientes || ingredientes.length === 0 || ingredientes.length === 0){
            return res.status(400).json({erro: "O campo deverá se chamar ingredientes, é obrigatório e deverá conter pelo menos um item"})
        }

        // tratamento de erro para o modo de preparo 
        if(!modoDePreparo || typeof modoDePreparo !== 'string' || modoDePreparo.trim() === ''){
            return res.status(400).json({erro: "O campo deverá se chamar modoDePreparo, é obrigatório e deverá ser uma string"})
        }

        // tratamento de erro para preferencia de  dieta
        if(!preferenciaDieta || typeof preferenciaDieta !== 'string' || preferenciaDieta.trim() === ''){
            return res.status(400).json({erro: "O campo deverá se chamar preferenciaDieta, é obrigatório e deverá ser uma string"})
        }

        // tratamento de erro para tempo de preparo
        if(!tempoPreparo || typeof tempoPreparo !== 'string' || tempoPreparo.trim() === ''){
            return res.status(400).json({erro: "O campo deverá se chamar tempoPreparo, é obrigatório e deverá ser uma string, exemplo: 40 minutos"})
        }

        const id = bancoDeReceitas.length + 1; 

        const novaReceita = new Receita(id, nome, ingredientes, modoDePreparo, preferenciaDieta, tempoPreparo);

        bancoDeReceitas.push(novaReceita);

        res.status(200).json({Sucesso: "Receita adicionada com sucesso"});
    } catch (erro){
        res.status(500).json({Erro: erro});
    }   
}