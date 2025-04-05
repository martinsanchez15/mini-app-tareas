// BASE DE DATOS SIMULADA - Lista de tareas
let tareas = [];

function guardarTarea(tarea) {
  tareas.push(tarea);
  console.log("Tarea almacenada internamente.");
}

/*
Escalabilidad: Esta estructura puede reemplazarse fácilmente por una base de datos real (PostgreSQL, MongoDB).
Mantenibilidad: El módulo está desacoplado, se puede migrar sin afectar el resto.
Seguridad: En un entorno real, deberíamos proteger el acceso y uso de la base de datos.
*/

module.exports = { guardarTarea };
