import { Router } from "express";
import {
  crearReceta,
  editarReceta,
  eliminarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/recetas.controllers.js";
import validacionReceta from "../helpers/validacionReceta.js";

const router = Router();

router.route("/recetas").get(listarRecetas).post([validacionReceta],crearReceta);
router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put([validacionReceta],editarReceta)
  .delete(eliminarReceta);

export default router;
