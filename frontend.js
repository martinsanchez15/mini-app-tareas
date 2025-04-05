// FRONTEND SIMULADO - Ingreso de la tarea

const backend = require('./backend');

// Simulación del formulario
function agregarTarea(nombreTarea) {
  console.log("Enviando tarea al backend...");
  const respuesta = backend.recibirTarea(nombreTarea);
  console.log(respuesta);
}

// Simulación de entrada del usuario
agregarTarea("Estudiar para el parcial");
agregarTarea(""); // Caso no válido

/* 
Escalabilidad: Se podría migrar este frontend a una SPA real con React/Vue. 
Mantenibilidad: El formulario está separado y puede ser fácilmente actualizado.
Seguridad: En un entorno real, deberíamos sanitizar el input del usuario antes de enviarlo.
*/
