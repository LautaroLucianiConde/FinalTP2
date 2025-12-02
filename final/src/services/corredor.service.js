import Factory from "../models/DAO/dao.factory.js";
import { distanciaGPS } from "../utils/distancia.js";

const corredoresModel = await Factory(process.env.PERSISTENCIA);

const agregarCorredor = async ({ id, latitud, longitud }) => {
    const nuevo = { id, latitud, longitud };
    const corredores = await corredoresModel.listarCorredores();
    const alertas = [];

    for (const c of corredores) {
        const distancia = distanciaGPS(
            latitud,
            longitud,
            c.latitud,
            c.longitud
        );

        if (distancia < 50 && c.id !== id) {
            alertas.push({
                corredor1: id,
                corredor2: c.id,
                distancia: distancia.toFixed(2)
            });
        }
    }
    await corredoresModel.agregarOActualizarCorredor(nuevo);
    return {
        corredor: nuevo,
        alertas
    };
};

const listarCorredores = async () => {
    return corredoresModel.listarCorredores();
};

export default {
    agregarCorredor,
    listarCorredores,
};
