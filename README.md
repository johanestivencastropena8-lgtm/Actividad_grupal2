# ADSO - Aseguramiento de Calidad mediante Git y GitHub

Proyecto colaborativo para practicar control de versiones, commits convencionales,
ramas de trabajo, Pull Requests, revisión de código y resolución de conflictos.

## Módulos

- `registro.js`: registra usuarios y valida nombre y correo.
- `reportes.js`: genera un resumen de usuarios.
- `index.js`: ejemplo de uso de los módulos.
- `test/`: pruebas automatizadas.

## Requisitos

- Node.js 18 o superior (para ejecutar las pruebas con `node --test`).
- Git.

## Ejecutar el proyecto

```bash
npm start
```

## Ejecutar las pruebas

```bash
npm test
```

## Flujo de trabajo colaborativo

1. Crear una rama `feature/modulo-registro` o `feature/modulo-reportes`.
2. Hacer commits pequeños con mensajes como `feat:`, `fix:` y `docs:`.
3. Publicar la rama con `git push`.
4. Abrir un Pull Request dirigido a `main`.
5. El compañero revisa los cambios en **Files changed**, deja comentarios y envía una revisión.
6. Corregir los comentarios solicitados y fusionar el Pull Request cuando esté aprobado.

## Exclusiones

El archivo `.gitignore` excluye variables de entorno, logs, dependencias instaladas,
archivos compilados y archivos temporales. No se deben subir secretos reales.
