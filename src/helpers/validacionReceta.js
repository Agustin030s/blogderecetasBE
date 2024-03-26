import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionReceta = [
  check("nombreReceta")
    .notEmpty()
    .withMessage("El nombre de la receta es un dato obligatorio")
    .isLength({ min: 5, max: 400 })
    .withMessage("El nombre debe tener entre 5 y 400 caracteres"),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es obligatoria")
    .isIn(["Carnes", "Pollo", "Pescado", "Al_Disco"])
    .withMessage(
      "La categoria debe ser una de las siguientes opciones (Carnes, Pollo, Pescado, Al_Disco)"
    ),
  check("descripcionBreve")
    .notEmpty()
    .withMessage("La descripcion de la receta es un dato obligatorio")
    .isLength({ min: 10, max: 200 })
    .withMessage("La descripcion debe tener entre 10 y 200 caracteres"),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i)
    .withMessage(
      "La imagen debe tener el formato de una url valida y terminar en (png|jpg|jpeg|gif|svg)"
    ),
  check("ingredientes")
    .notEmpty()
    .withMessage("Los ingredientes de la receta es un dato obligatorio")
    .isLength({ min: 5, max: 450 })
    .withMessage("Los ingredientes debe tener entre 5 y 450 caracteres"),
  check("preparacion")
    .notEmpty()
    .withMessage("La preparacion de la receta es un dato obligatorio")
    .isLength({ min: 25, max: 2000 })
    .withMessage("La preparacion debe tener entre 25 y 2000 caracteres"),
  check("tiempoDePreparacion")
    .notEmpty()
    .withMessage("El tiempo de preparacion de la receta es un dato obligatorio")
    .isNumeric()
    .withMessage("El tiempo debe ser numerico")
    .custom((value) => {
      if (value >= 5 && value <= 300) {
        return true;
      } else {
        throw new Error("El tiempo debe estar entre 5 y 300 minutos");
      }
    }),
  check("autor")
    .notEmpty()
    .withMessage("El autor de la receta es un dato obligatorio")
    .isLength({ min: 3, max: 60 })
    .withMessage("El autor debe tener entre 3 y 60 caracteres"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionReceta;
