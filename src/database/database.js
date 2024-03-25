import mongoose from "mongoose";
import "dotenv/config";

const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI);

const datosConexion = mongoose.connection;

datosConexion.once("open", () => {
  console.info("Base de datos conectada");
});
