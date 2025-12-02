const corredores = [];

const agregarOActualizarCorredor = (nuevo) => {
    const index = corredores.findIndex((c) => c.id === nuevo.id);

    if (index !== -1) {
        corredores[index] = nuevo;
    } else {
        corredores.push(nuevo);
    }

    return nuevo;
};

const listarCorredores = () => corredores;

export default {
    agregarOActualizarCorredor,
    listarCorredores,
};
