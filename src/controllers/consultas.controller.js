import BancodeReceitas from "../database/BancodeReceitas.js";
import { ingredientesPorRegiao } from "../database/BancoDeIngredientesPorRegiao.js";

export const consultaReceitas = (req, res) => {
    try{
        res.status(200).json(BancodeReceitas);
    } catch(erro){
        res.status(400).json({Erro: erro});
    }
    
}

export const consultaIngredientesPorRegiao = (req, res) => {
    try{
        res.status(200).json(ingredientesPorRegiao);
    } catch(erro){
        res.status(400).json({Erro: erro});
    }
     
}

