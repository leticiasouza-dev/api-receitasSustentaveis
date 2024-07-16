import bancoDeReceitas from "../database/BancodeReceitas.js";
import { ingredientesPorRegiao } from "../database/BancoDeIngredientesPorRegiao.js";

export const filtrandoReceitasPeloId = (req, res) => {
    const id = parseInt(req.params.id); // pegando parametros passado pelo endpoint

    const filtroReceitasId = bancoDeReceitas.filter(receita => receita.id === id);
    res.status(200).json(filtroReceitasId);
}

export const filtroReceitasPeloIngrediente  = (req, res) => {
    const ingrediente = req.params.ingredientes;

    const filtroReceitasPeloIngrediente = bancoDeReceitas.filter(receita => receita.ingredientes.includes(ingrediente));

    if (filtroReceitasPeloIngrediente.length === 0) {
        return res.status(404).json({ message: 'Nenhuma receita encontrada com esse ingrediente.' });
    }

    res.status(200).json(filtroReceitasPeloIngrediente);
}

export const filtroReceitasPreferenciaDieta = (req, res) => {
    const preferenciaDieta = req.params.preferenciaDieta;

    const filtroReceitasPelaPreferenciaDieta = bancoDeReceitas.filter(receita => receita.preferenciaDieta.includes(preferenciaDieta))

    res.status(200).json(filtroReceitasPelaPreferenciaDieta);
}

export const filtrandoIngredientesPelaRegiao = (req, res) => {
    const regiao = String(req.params.regiao);

    const filtroIngredientesRegiao = ingredientesPorRegiao.filter(ingrediente => ingrediente.regiao === regiao);
    res.status(200).json(filtroIngredientesRegiao);
}

