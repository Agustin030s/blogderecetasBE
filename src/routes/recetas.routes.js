import { Router } from "express";
import {
  crearReceta,
  editarReceta,
  eliminarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/recetas.controllers.js";

const router = Router();

router.route("/recetas").get(listarRecetas).post(crearReceta);
router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put(editarReceta)
  .delete(eliminarReceta);

export default router;
