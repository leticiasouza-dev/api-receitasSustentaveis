import { Router } from "express";
import  {consultaReceitas}  from "./controllers/consultaReceitas.js";
import { filtrandoReceitasPeloId } from "./controllers/filtragemReceitasId.js";

const rotaConsultaReceitas = Router();
const rotaReceitasFiltradasId = Router();

rotaConsultaReceitas.get('/receitas', consultaReceitas);
rotaReceitasFiltradasId.get('/receitas/:id', filtrandoReceitasPeloId);

export {rotaConsultaReceitas, rotaReceitasFiltradasId};