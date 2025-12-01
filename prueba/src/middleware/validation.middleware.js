export function validarUsuario(req, res, next) {
    const { name, email, age } = req.body;

    const errores = [];

    if (!name || typeof name !== "string" || name.trim() === "") {
        errores.push("El nombre es obligatorio y debe ser texto.");
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email || !emailRegex.test(email)) {
        errores.push("El email es obligatorio y debe tener un formato válido.");
    }

    if (age === undefined || typeof age !== "number" || age < 0 || age > 120) {
        errores.push("La edad debe ser un número entre 0 y 120.");
    }

    if (errores.length > 0) {
        return res.status(400).json({ error: errores });
    }
    next();
}
