import bancoDeReceitas from "../database/BancodeReceitas.js";
import { ingredientesPorRegiao } from "../database/BancoDeIngredientesPorRegiao.js";

export const filtrandoReceitasPeloId = (req, res) => {
    const id = parseInt(req.params.id); // pegando parametros passado pelo endpoint

    const filtroReceitasId = bancoDeReceitas.filter(receita => receita.id === id);
    res.status(200).json(filtroReceitasId);
}


export const filtrandoIngredientesPelaRegiao = (req, res) => {
    const regiao = String(req.params.regiao);

    const filtroIngredientesRegiao = ingredientesPorRegiao.filter(ingrediente => ingrediente.regiao === regiao);
    res.status(200).json(filtroIngredientesRegiao);
}
