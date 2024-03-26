import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuario = [
  check("nombreCompleto")
    .notEmpty()
    .withMessage("El nombre completo es obligatorio")
    .isLength({ min: 3, max: 60 })
    .withMessage("El nombre debe tener entre 3 y 60 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isLength({ min: 10, max: 340 })
    .withMessage("El email debe tener entre 10 y 340 caracteres")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .withMessage("Formato invalido de email"),
  check("usuario")
    .notEmpty()
    .withMessage("El usuario es obligatorio")
    .isLength({ min: 5, max: 20 })
    .withMessage("El usuario debe tener entre 5 y 20 caracteres"),
  check("clave")
    .notEmpty()
    .withMessage("La clave es obligatoria")
    .isLength({ min: 8, max: 16 })
    .withMessage("La clave debe tener entre 8 y 16 caracteres")
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
    .withMessage("Formato invalido de clave"),
  check("rol")
    .notEmpty()
    .withMessage("El rol es obligatorio")
    .isIn(["Administrador", "Usuario"])
    .withMessage(
      "El rol debe ser una de las siguientes opciones (Administrador, Usuario)"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
