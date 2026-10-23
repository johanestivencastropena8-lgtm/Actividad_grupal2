/**
 * Registra un usuario después de validar su nombre y correo.
 * @param {string} nombre
 * @param {string} correo
 * @returns {{mensaje: string, usuario: {nombre: string, correo: string}} | {error: string}}
 */
function registrarUsuario(nombre, correo) {
  if (
    typeof nombre !== "string" ||
    typeof correo !== "string" ||
    nombre.trim() === "" ||
    correo.trim() === ""
  ) {
    return {
      error: "El nombre y el correo son obligatorios y deben ser texto válido."
    };
  }

  return {
    mensaje: "Usuario registrado correctamente",
    usuario: {
      nombre: nombre.trim(),
      correo: correo.trim()
    }
  };
}

module.exports = { registrarUsuario };
