import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.resolve(__dirname, "corredores.json");

const obtenerCorredores = async () => {
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

const guardarCorredores = async (corredores) => {
    await fs.writeFile(FILE_PATH, JSON.stringify(corredores, null, 2));
};

const agregarOActualizarCorredor = async (nuevo) => {
    const corredores = await obtenerCorredores();

    const index = corredores.findIndex((c) => c.id === nuevo.id);

    if (index !== -1) {
        corredores[index] = nuevo;
    } else {
        corredores.push(nuevo);
    }

    await guardarCorredores(corredores);
    return nuevo;
};

const listarCorredores = async () => {
    return await obtenerCorredores();
};

export default {
    agregarOActualizarCorredor,
    listarCorredores,
};
