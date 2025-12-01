import Factory from "../models/DAO/dao.factory.js";
const usersModel = await Factory("FS");

const agregarUsuario = (user) => usersModel.agregarUsuario(user);
const obtenerUsuario = () => usersModel.obtenerUsuario();
const obtenerRangoEdad = (rango) => usersModel.obtenerRangoEdad(rango);
const actualizarUsuario = (id, updatedUser) =>
  usersModel.actualizarUsuario(id, updatedUser);

export default {
  agregarUsuario,
  obtenerUsuario,
  obtenerRangoEdad,
  actualizarUsuario,
};
