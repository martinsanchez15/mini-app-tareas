// BACKEND SIMULADO - Validación y lógica
const db = require('./database');

function recibirTarea(tarea) {
  if (!tarea || tarea.trim() === "") {
    return "Error: la tarea no puede estar vacía.";
  }

  db.guardarTarea(tarea);
  return `Tarea guardada: ${tarea}`;
}

/*
Escalabilidad: Permite escalar la lógica hacia un servidor Express.js, NestJS, etc.
Mantenibilidad: La lógica de negocio está separada de la base de datos y del frontend.
Seguridad: Se valida que la entrada no esté vacía para evitar errores y abuso.
*/

module.exports = { recibirTarea };
