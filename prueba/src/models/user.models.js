const users = [];

const agregarUsuario = (newUser) => {
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    const exists = users.find((u) => u.email === newUser.email);
    if (exists) throw new Error("El usuario ya existe con ese email");

    const userToAdd = { id: newId, ...newUser };
    users.push(userToAdd);
    return userToAdd;
};

const obtenerUsuario = () => users;

const obtenerRangoEdad = (rango) => {
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

const actualizarUsuario = (id, updatedUser) => {
    id = Number(id);
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    users[index] = { id: users[index].id, ...updatedUser };
    return users[index];
};

export default {
    agregarUsuario,
    obtenerUsuario,
    obtenerRangoEdad,
    actualizarUsuario,
};
