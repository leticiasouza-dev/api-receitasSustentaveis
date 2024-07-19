import { Router } from "express";
import  {consultaIngredientesPorRegiao, consultaReceitas}  from "../controllers/consultas.controller.js";
import { filtrandoReceitasPeloId, filtrandoIngredientesPelaRegiao, filtroReceitasPeloIngrediente, filtroReceitasPreferenciaDieta} from "../controllers/filtragens.controller.js";
import { adicionarReceita } from "../controllers/adicionandoReceita.controllers.js";

// Rotas de Consultas
const rotaConsultaReceitas = Router();
rotaConsultaReceitas.get('/receitas', consultaReceitas);

const rotaConsultaIngredientesPorRegiao = Router();
rotaConsultaIngredientesPorRegiao.get('/ingredientesPorRegiao', consultaIngredientesPorRegiao);

//Rotas de Filtragens
const rotaReceitasFiltradasId = Router();
rotaReceitasFiltradasId.get('/receitas/:id', filtrandoReceitasPeloId);

const rotaReceitasFiltradasIngredientes = Router();
rotaReceitasFiltradasIngredientes.get('/receitas/ingrediente/:ingredientes', filtroReceitasPeloIngrediente);

const rotaReceitasFiltradasPreferenciaDieta = Router();
rotaReceitasFiltradasPreferenciaDieta.get('/receitas/preferenciaDieta/:preferenciaDieta', filtroReceitasPreferenciaDieta)

const rotaIngredientesFiltradosRegiao = Router();
rotaIngredientesFiltradosRegiao.get('/ingredientesPorRegiao/:regiao', filtrandoIngredientesPelaRegiao)

// Rota adicionando Rceita:
const rotaAdicionandoNovaReceita = Router();
rotaAdicionandoNovaReceita.post('/receitas/novaReceita/', adicionarReceita);


export {rotaConsultaReceitas, 
        rotaReceitasFiltradasId, 
        rotaConsultaIngredientesPorRegiao, 
        rotaIngredientesFiltradosRegiao, 
        rotaReceitasFiltradasIngredientes, 
        rotaReceitasFiltradasPreferenciaDieta,
        rotaAdicionandoNovaReceita
};