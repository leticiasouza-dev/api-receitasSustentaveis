import BancodeReceitas from "../database/BancodeReceitas.js";
import { ingredientesPorRegiao } from "../database/BancoDeIngredientesPorRegiao.js";

export const consultaReceitas = (req, res) => {
    res.status(200).json(BancodeReceitas);
}

export const consultaIngredientesPorRegiao = (req, res) => {
     res.status(200).json(ingredientesPorRegiao);
}

