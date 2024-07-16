import e from "express";
import { rotaConsultaIngredientesPorRegiao, rotaConsultaReceitas, rotaIngredientesFiltradosRegiao,rotaReceitasFiltradasId, rotaReceitasFiltradasIngredientes } from "./src/routes/receitas.routes.js";

const app = e();

app.use(rotaConsultaReceitas);
app.use(rotaConsultaIngredientesPorRegiao)
app.use(rotaReceitasFiltradasId);
app.use(rotaIngredientesFiltradosRegiao);
app.use(rotaReceitasFiltradasIngredientes);

app.listen(8080, () => {
    const link = 'http://localhost:8080';
    console.log(`Servidor iniciado em ${link}`);
})