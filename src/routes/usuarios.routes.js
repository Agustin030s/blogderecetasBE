import { Router } from "express";
import {
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
  listarUsuarios,
  obtenerUsuario,
} from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";

const router = Router();

router
  .route("/usuarios")
  .get(listarUsuarios)
  .post([validacionUsuario], crearUsuario);

router
  .route("/usuarios/:id")
  .get(obtenerUsuario)
  .put([validacionUsuario], editarUsuario)
  .delete(eliminarUsuario);

export default router;
