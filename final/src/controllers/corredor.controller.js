import corredorService from "../services/corredor.service.js";

const agregarCorredor = async (req, res) => {
    try {
        const { id, latitud, longitud } = req.body;

        const resultado = await corredorService.agregarCorredor({
            id,
            latitud,
            longitud,
        });

        res.status(201).json({
            message: "Corredor procesado correctamente",
            data: resultado,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listarCorredores = async (req, res) => {
    try {
        const corredores = await corredorService.listarCorredores();
        res.json(corredores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    agregarCorredor,
    listarCorredores,
};
