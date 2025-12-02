export function validarCorredor(req, res, next) {
  const { id, latitud, longitud } = req.body;

  const errores = [];
  if (!id || typeof id !== "string" || !/^[A-Z0-9]{6}$/.test(id)) {
    errores.push("El ID debe ser alfanumérico de 6 caracteres (ej: COR123).");
  }
  if (latitud === undefined || typeof latitud !== "number") {
    errores.push("La latitud debe ser un número.");
  }
  if (longitud === undefined || typeof longitud !== "number") {
    errores.push("La longitud debe ser un número.");
  }

  if (errores.length > 0) {
    return res.status(400).json({ error: errores });
  }

  next();
}
