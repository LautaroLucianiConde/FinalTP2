import express from "express";
import corredorController from "../controllers/corredor.controller.js";
import { validarCorredor } from "../middleware/validation.middleware.js";

const router = express.Router();

router.post(
    "/corredores",
    validarCorredor,
    corredorController.agregarCorredor
);
router.get("/corredores", corredorController.listarCorredores);
export default router;
