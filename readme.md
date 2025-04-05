# 📝 Mini App de Tareas

Este proyecto simula una aplicación de gestión de tareas con una arquitectura de tres capas: **Frontend**, **Backend** y **Base de Datos** (simulada).

## 📂 Estructura del Proyecto
mini-app-tareas/ 
├──frontend.js # Simula la entrada del usuario y envía la tarea 
├── backend.js # Recibe, valida y responde la tarea
└── database.js # Guarda la tarea en una lista interna

## 🚀 ¿Cómo funciona?

1. El usuario ingresa una tarea en el frontend (`frontend.js`).
2. El backend (`backend.js`) recibe la tarea, la valida y responde.
3. La base de datos simulada (`database.js`) guarda la tarea en una lista.

## 🧠 Características Clave

✅ Separación de responsabilidades en tres capas  
✅ Módulos independientes para mejorar la organización  
✅ Validación básica de entrada  
✅ Simulación realista de una arquitectura escalable

## 🔒 Seguridad

- Validación de entrada para evitar tareas vacías.
- En una versión real, se deberían sanitizar los datos y proteger las conexiones.

## 📈 Escalabilidad

- El frontend puede migrarse fácilmente a una SPA con React o Vue.
- El backend puede implementarse con frameworks como Express.js o NestJS.
- La base de datos puede evolucionar a un sistema real como PostgreSQL o MongoDB.

## 🔧 Mantenibilidad

- El código está modularizado: cada archivo cumple una única función clara.
- Esto permite actualizar o reemplazar una capa sin afectar las demás.

## 👤 Autor

Martín Sánchez  
Repositorio: [https://github.com/martinsanchez15/mini-app-tareas](https://github.com/martinsanchez15/mini-app-tareas)
