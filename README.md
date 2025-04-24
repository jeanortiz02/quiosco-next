# App de Gestión de Quiosco

Aplicación para la administración de un quiosco que permite gestionar productos, pedidos e inventario. Desarrollada con Next.js 14 y App Router.


# Demostración 

[![Título del Video](https://i1.ytimg.com/vi/42nZ3We3ftU/hqdefault.jpg)](https://www.youtube.com/watch?v=42nZ3We3ftU)

[Dar Click Aquí para ver el video demostrativo](https://www.youtube.com/watch?v=42nZ3We3ftU)

## Funcionalidades

- Validación de campos con Zod.
- Registro y edición de productos.
- Organización y visualización de pedidos.
- Vista detallada de pedidos realizados.
- Vista para cocina con seguimiento de pedidos.

## Tecnologías usadas

### Core

- **Next.js 14** con **App Router**
- **React**
- **TypeScript**
- **Prisma** (ORM)
- **Zod** (validación de datos)
- **TailwindCSS** (estilos)
- **PostgreSql** (Base de datos)

### Librerías y utilidades adicionales

- **React Icons** (iconografía)
- **Heroicons** (iconos SVG)
- **React Toastify** (notificaciones)
- **Zustand** (estado global)
- **SWR** (data fetching)
- **Next Cloudinary** (gestión de imágenes en la nube)
- **ESLint** y configuración oficial de Next.js para linting
- **ts-node** (para scripts como seeds)

# Correr en Desarrollo 

* Duplicar el archivo env-example
* Renombrar a .env
* Rellenar todos los datos de las variables de entorno.
  - DATABASE_URL="<postgreesql>"
  - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
  - NEXT_PUBLIC_CLOUDINARY_API_KEY="<Your API Key>"
  - CLOUDINARY_API_SECRET="<Your API Secret>"
* Ejecutar.
  ```
  npm install
  npx prisma migrate dev
  npx prisma generate
  npm run dev
  ```
---

> Repositorio: [https://github.com/jeanortiz02/quiosco-next](https://github.com/jeanortiz02/quiosco-next)
