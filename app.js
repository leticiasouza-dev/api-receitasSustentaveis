import e from "express";
import { rotaConsultaReceitas,rotaReceitasFiltradasId } from "./routesReceitas.js";

const app = e();

app.use(rotaConsultaReceitas);
app.use(rotaReceitasFiltradasId);

app.listen(8080, () => {
    const link = 'http://localhost:8080';
    console.log(`Servidor iniciado em ${link}`);
})