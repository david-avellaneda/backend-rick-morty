# Aplicación Backend de Consulta de Personajes humanos de Rick and Morty

Esta aplicación utiliza la API de GraphQL de Rick and Morty para realizar consultas y mostrar información sobre los personajes. Utiliza Express.js como servidor web y realiza peticiones a la API de Rick and Morty mediante Axios.

## Tecnologías Utilizadas

- Node.js
- Express.js
- Axios
- GraphQL

## Requisitos Previos

- Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

## Instalación

1. Clona este repositorio en tu máquina local o descárgalo como archivo ZIP.

2. Abre una terminal y navega hasta la carpeta del proyecto:

```
  cd ruta/del/proyecto
```

3. Instala las dependencias utilizando PNPM (asegúrate de tener PNPM instalado: Instrucciones de instalación):

```
  pnpm install
```

## Ejecucion

Una vez que las dependencias estén instaladas, puedes ejecutar la aplicación:

```
  pnpm dev
```

El servidor estará en funcionamiento en `http://localhost:3001`.

## Uso

- Para obtener una lista de personajes humanos, accede a: `http://localhost:3001/api`.
- Para obtener información sobre un personaje específico, accede a: `http://localhost:3001/api/character/:id`, reemplazando `:id` con el ID del personaje.

## Estructura del Código

- `index.js`: Punto de entrada de la aplicación que configura el servidor Express y define las rutas.
- `package.json`: Archivo de configuración de PNPM que especifica las dependencias y scripts de la aplicación.
- `pnpm-lock.yaml`: Archivo de bloqueo de PNPM que almacena información detallada de las dependencias.

## Contacto

Si tienes alguna pregunta o comentario, no dudes en contactarme en `avellaneda.dev@gmail.com`.
