

# Snippet Manager

Aplicación web simple para **guardar pequeños snippets de texto** directamente en el navegador.

El proyecto está construido con:

* ⚡ Vite
* 📘 TypeScript
* 🧩 JavaScript Vanilla
* 💾 localStorage para persistencia

No utiliza backend ni base de datos externa.

## Características

* ➕ Crear snippets
* 📋 Listar snippets guardados
* 🗑 Eliminar snippets
* 💾 Persistencia usando `localStorage`
* ⚡ Aplicación ligera y rápida

**Nota:** Los snippets **no se pueden editar**, solo crear o eliminar.

## Cómo funciona

Los snippets se guardan en el `localStorage` del navegador.
Esto significa que:

* Los datos permanecen entre recargas de página.
* Los datos solo existen en **ese navegador y dispositivo**.
* Si se limpia el almacenamiento del navegador, los snippets se perderán.



## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/usuario/snippet-brain
cd snippet-brain
```

Instalar dependencias:

```bash
npm install
```

## Desarrollo

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:5173
```

## Build

Generar versión de producción:

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```



