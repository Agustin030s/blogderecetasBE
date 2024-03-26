import Receta from "../database/models/receta.js";

export const crearReceta = async (req, res) => {
  try {
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      message: "El producto se creo con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "No se pudo crear la receta",
    });
  }
};

export const listarRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "No se pudo obtener las recetas",
    });
  }
};

export const obtenerReceta = async (req, res) => {
  try {
    const id = req.params.id;
    const receta = await Receta.findById(id);
    res.status(200).json(receta);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "No se pudo obtener la receta",
    });
  }
};

export const editarReceta = async (req, res) => {
  try {
    const id = req.params.id;
    const recetaAEditar = await Receta.findById(id);

    if (!recetaAEditar)
      res.status(404).json({
        message: "No se encontro la receta a editar",
      });

    await Receta.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      message: "Receta editada con éxito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Ocurrio un error al editar la receta",
    });
  }
};

export const eliminarReceta = async (req, res) => {
  try {
    const id = req.params.id;
    const recetaAEliminar = await Receta.findById(id);

    if (!recetaAEliminar)
      res.status(404).json({
        message: "No se encontro la receta a eliminar",
      });

    await Receta.findByIdAndDelete(id);
    res.status(200).json({
      message: "La receta se elimino con éxito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Ocurrio un error al eliminar la receta",
    });
  }
};
