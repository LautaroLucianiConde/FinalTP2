import express from "express";
import usersController from "../controllers/user.controller.js";
import { validarUsuario } from "../middleware/validation.middleware.js";

const router = express.Router();

router.post("/usuario", validarUsuario, usersController.agregarUsuario);
router.get("/usuario", usersController.obtenerUsuario);
router.get("/usuarios/total", usersController.obtenerTotalUsuarios);
router.get("/usuario/rango/:rango", usersController.obtenerRangoEdad);
router.put("/usuario/:id", validarUsuario, usersController.actualizarUsuario);

export default router;
