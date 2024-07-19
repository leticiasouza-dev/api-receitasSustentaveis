import bancoDeReceitas from "../database/BancodeReceitas.js";

export const deletarReceita = (req, res) => {
    const id = parseInt(req.params.idDeletar);

    const receitaDeletar = bancoDeReceitas.findIndex(receita => receita.id === id); //encontra o indice da receita com id fornecido

    bancoDeReceitas.splice(receitaDeletar, 1);// Remove um item a partir do índice encontrado

    res.status(200).json({mensagem: 'Receita removida com sucesso', receita: receitaDeletar})
}