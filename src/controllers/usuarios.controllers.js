import Usuario from "../database/models/usuario.js";

export const crearUsuario = async (req, res) => {
  try {
    const usuarioNuevo = new Usuario(req.body);
    await usuarioNuevo.save();
    res.status(201).json({
      message: "Usuario dado de alta exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "El usuario no pudo ser dado de alta",
    });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "No se pudo listar los usuarios",
    });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findById(id);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "No se pudo obtener el usuario",
    });
  }
};

export const editarUsuario = async (req, res) => {
    try {
      const id = req.params.id;
      const usuarioAEditar = await Usuario.findById(id);
  
      if (!usuarioAEditar)
        res.status(404).json({
          message: "No se encontro el usuario a editar",
        });
  
      await Usuario.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "Usuario editado con éxito",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocurrio un error al editar el usuario",
      });
    }
  };
  
  export const eliminarUsuario = async (req, res) => {
    try {
      const id = req.params.id;
      const usuarioAEliminar = await Usuario.findById(id);
  
      if (!usuarioAEliminar)
        res.status(404).json({
          message: "No se encontro el usuario a eliminar",
        });
  
      await Usuario.findByIdAndDelete(id);
      res.status(200).json({
        message: "El usuario se elimino con éxito",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocurrio un error al eliminar el usuario",
      });
    }
  };