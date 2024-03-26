import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 400,
    unique: true,
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Carnes", "Pollo", "Pescado", "Al_Disco"],
  },
  descripcionBreve: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 200,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        const pattern =
          /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
        return pattern.test(valor);
      },
      message: (props) => `${props.value} no es una url válida`,
    },
  },
  ingredientes: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 450,
  },
  preparacion: {
    type: String,
    required: true,
    minLength: 25,
    maxLength: 2000,
  },
  tiempoDePreparacion: {
    type: Number,
    required: true,
    min: 5,
    max: 300,
  },
  autor: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 60,
  },
});

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;
