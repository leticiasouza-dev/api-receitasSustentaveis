import { Router } from "express";
import  {consultaIngredientesPorRegiao, consultaReceitas}  from "../controllers/consultas.controller.js";
import { filtrandoReceitasPeloId, filtrandoIngredientesPelaRegiao} from "../controllers/filtragens.controller.js";

// Rotas de Consultas
const rotaConsultaReceitas = Router();
rotaConsultaReceitas.get('/receitas', consultaReceitas);

const rotaConsultaIngredientesPorRegiao = Router();
rotaConsultaIngredientesPorRegiao.get('/ingredientesPorRegiao', consultaIngredientesPorRegiao);

//Rotas de Filtragens
const rotaReceitasFiltradasId = Router();
rotaReceitasFiltradasId.get('/receitas/:id', filtrandoReceitasPeloId);

const rotaIngredientesFiltradosRegiao = Router();
rotaIngredientesFiltradosRegiao.get('/ingredientesPorRegiao/:regiao', filtrandoIngredientesPelaRegiao)


export {rotaConsultaReceitas, rotaReceitasFiltradasId, rotaConsultaIngredientesPorRegiao, rotaIngredientesFiltradosRegiao};