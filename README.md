
# Correr en Desarrollo 

* Duplicar el archivo .env-template
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
* Ejecutar estos comandos de prisma 
```

```
