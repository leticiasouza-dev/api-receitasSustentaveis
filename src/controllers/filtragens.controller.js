import bancoDeReceitas from "../database/BancodeReceitas.js";
import { ingredientesPorRegiao } from "../database/BancoDeIngredientesPorRegiao.js";

export const filtrandoReceitasPeloId = (req, res) => {
    try{
        const id = parseInt(req.params.id); // pegando parametros passado pelo endpoint

        const filtroReceitasId = bancoDeReceitas.filter(receita => receita.id === id);

        if(filtrandoReceitasPeloId.length === 0){
            return res.status(404).json({Mensagem: 'Nenhuma receita foi encontrada com esse id'})
        }
        res.status(200).json(filtroReceitasId);
    } catch(erro){
        res.status(400).json({Erro: erro});
    }
    
}

export const filtroReceitasPeloIngrediente  = (req, res) => {
    try{
         const ingrediente = req.params.ingredientes;

        const filtroReceitasPeloIngrediente = bancoDeReceitas.filter(receita => receita.ingredientes.includes(ingrediente));

        if (filtroReceitasPeloIngrediente.length === 0) {
            return res.status(404).json({ Mensagem: 'Nenhuma receita encontrada com esse ingrediente.' });
        }

        res.status(200).json(filtroReceitasPeloIngrediente);
    } catch(erro){
        res.status(500).json({Erro: erro})
    }
   
}

export const filtroReceitasPreferenciaDieta = (req, res) => {

    try{
        const preferenciaDieta = req.params.preferenciaDieta;

        const filtroReceitasPelaPreferenciaDieta = bancoDeReceitas.filter(receita => receita.preferenciaDieta.includes(preferenciaDieta))

        if(filtroReceitasPelaPreferenciaDieta.length === 0){
            return res.status(404).json({Mensagem: 'Nenhuma receita foi encontrada por essa preferencia de dieta'})
        }

        res.status(200).json(filtroReceitasPelaPreferenciaDieta);
    } catch(erro){
        res.status(500).json({Erro: erro});
    }
    

    
}

export const filtrandoIngredientesPelaRegiao = (req, res) => {
    try{
        const regiao = String(req.params.regiao);

        const filtroIngredientesRegiao = ingredientesPorRegiao.filter(ingrediente => ingrediente.regiao === regiao);
        
        if(filtrandoIngredientesPelaRegiao.length === 0){
            res.status(404).json({Mensagem: 'Nenhum ingrediente foi encontrado com essa Região'});
        }

        res.status(200).json(filtroIngredientesRegiao);
    } catch(erro){
        res.status(500).json({Erro: erro})
    }
    
}

