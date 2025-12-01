import usersService from "../services/user.service.js";

const agregarUsuario = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const newUser = await usersService.agregarUsuario({ name, email, age });
    res.status(201).json({
      message: "Usuario agregado correctamente",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerUsuario = async (req, res) => {
  try {
    const users = await usersService.obtenerUsuario();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerTotalUsuarios = async (req, res) => {
  try {
    const users = await usersService.obtenerUsuario();
    res.json({
      total: users.length,
      usuarios: users,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerRangoEdad = async (req, res) => {
  try {
    const { rango } = req.params;
    const result = await usersService.obtenerRangoEdad(rango);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const updatedUser = await usersService.actualizarUsuario(id, {
      name,
      email,
      age,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({
      message: "Usuario actualizado correctamente",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  agregarUsuario,
  obtenerUsuario,
  obtenerTotalUsuarios,
  obtenerRangoEdad,
  actualizarUsuario,
};