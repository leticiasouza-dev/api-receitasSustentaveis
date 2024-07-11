import e from "express";
import { rotaConsultaIngredientesPorRegiao, rotaConsultaReceitas,rotaReceitasFiltradasId } from "./src/routes/receitas.routes.js";

const app = e();

app.use(rotaConsultaReceitas);
app.use(rotaConsultaIngredientesPorRegiao)
app.use(rotaReceitasFiltradasId);


app.listen(8080, () => {
    const link = 'http://localhost:8080';
    console.log(`Servidor iniciado em ${link}`);
})