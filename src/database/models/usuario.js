import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  nombreCompleto: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 60,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 340,
    validate: {
      validator: (valor) => {
        const pattern =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return pattern.test(valor);
      },
      message: (props) => `${props.value} no es un email válido`,
    },
    unique: true,
  },
  usuario: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20,
    unique: true,
  },
  clave: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 16,
    validate: {
      validator: (valor) => {
        const pattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        return pattern.test(valor);
      },
      message: (props) => `${props.value} no es formato válido de clave`,
    },
  },
  rol: {
    type: String,
    required: true,
    enum: ["Administrador", "Usuario"],
  },
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
