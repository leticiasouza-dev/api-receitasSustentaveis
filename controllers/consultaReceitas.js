import BancodeReceitas from "../database/BancodeReceitas.js";

export const consultaReceitas = (req, res) => {
    res.status(200).json(BancodeReceitas);
}

