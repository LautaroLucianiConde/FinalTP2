import dotenv from "dotenv";
dotenv.config();

import express from "express";
import corredorRouter from "./final/src/routes/corredor.routes.js";

const app = express();
app.use(express.json());

app.use("/", corredorRouter);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`)
);
