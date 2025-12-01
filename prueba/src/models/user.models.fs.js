import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.resolve(__dirname, "user.json");

const obtenerUsuarios = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(FILE_PATH, JSON.stringify([], null, 2));
      return [];
    }
    throw error;
  }
};

const guardarUsuarios = async (usuarios) => {
  await fs.writeFile(FILE_PATH, JSON.stringify(usuarios, null, 2));
};

const agregarUsuario = async (newUser) => {
  const users = await obtenerUsuarios();
  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const exists = users.find((u) => u.email === newUser.email);
  if (exists) throw new Error("El usuario ya existe con ese email");

  const userToAdd = { id: newId, ...newUser };
  users.push(userToAdd);
  await guardarUsuarios(users);
  return userToAdd;
};

const obtenerUsuario = async () => {
  return await obtenerUsuarios();
};

const obtenerRangoEdad = async (rango) => {
  const users = await obtenerUsuarios();
  let filtered = [];

  switch (rango) {
    case "joven":
      filtered = users.filter((u) => u.age < 25);
      break;
    case "adulto":
      filtered = users.filter((u) => u.age >= 25 && u.age < 60);
      break;
    case "viejo":
      filtered = users.filter((u) => u.age >= 60);
      break;
    default:
      throw new Error("Rango inválido. Usa: joven, adulto o viejo.");
  }

  return { total: filtered.length, data: filtered };
};

const actualizarUsuario = async (id, updatedUser) => {
  const users = await obtenerUsuarios();
  id = Number(id);
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;

  users[index] = { id: users[index].id, ...updatedUser };
  await guardarUsuarios(users);
  return users[index];
};

export default {
  agregarUsuario,
  obtenerUsuario,
  obtenerRangoEdad,
  actualizarUsuario,
};
