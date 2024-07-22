import bancoDeReceitas from "../database/BancodeReceitas.js";

export const deletarReceita = (req, res) => {
    try{
        const id = parseInt(req.params.idDeletar);

        if(!id || typeof id !== 'number'){
            res.status(400).json({Erro: 'Por favor informe um id valído para poder deletar a receita desejada, deverá ser um numero'})
        }

        const receitaDeletar = bancoDeReceitas.findIndex(receita => receita.id === id); //encontra o indice da receita com id fornecido

        bancoDeReceitas.splice(receitaDeletar, 1);// Remove um item a partir do índice encontrado

        res.status(200).json({ mensagem: 'Receita deletada com sucesso.' });
    } catch(erro){
        res.status(500).json({Erro: 'Receita não encontrada'});
    }
}