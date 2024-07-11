import { Router } from "express";
import  {consultaIngredientesPorRegiao, consultaReceitas}  from "../controllers/consultaReceitas.js";
import { filtrandoReceitasPeloId} from "../controllers/filtragemReceitas.js";

// Rotas de Consultas
const rotaConsultaReceitas = Router();
const rotaConsultaIngredientesPorRegiao = Router();

//Rotas de Filtragens
const rotaReceitasFiltradasId = Router();


rotaConsultaReceitas.get('/receitas', consultaReceitas);
rotaConsultaIngredientesPorRegiao.get('/ingredientesPorRegiao', consultaIngredientesPorRegiao);

rotaReceitasFiltradasId.get('/receitas/:id', filtrandoReceitasPeloId);


export {rotaConsultaReceitas, rotaReceitasFiltradasId, rotaConsultaIngredientesPorRegiao};