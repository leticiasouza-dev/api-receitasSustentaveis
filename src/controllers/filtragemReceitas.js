import bancoDeReceitas from "../database/BancodeReceitas.js";

export const filtrandoReceitasPeloId = (req, res) => {
    const id = parseInt(req.params.id); // pegando parametros passado pelo endpoint

    const filtroReceitasId = bancoDeReceitas.filter(receita => receita.id === id);
    res.status(200).json(filtroReceitasId);
}

