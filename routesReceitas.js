import { Router } from "express";
import  {consultaReceitas}  from "./controllers/consultaReceitas.js";

const rotaConsultaReceitas = Router();

rotaConsultaReceitas.get('/receitas', consultaReceitas)

export {rotaConsultaReceitas};