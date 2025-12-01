import express from "express";
import usuarioRouter from "./prueba/src/routes/user.routes.js";



const app = express();
app.use(express.json());


app.use("/", usuarioRouter);

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));