# Usa una imagen de Node.js para construir la aplicación Angular
FROM node:16-alpine AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Compila la aplicación Angular
RUN npm run build --prod

# Usa una imagen de Nginx para servir la aplicación Angular
FROM nginx:alpine

# Copia los archivos compilados al directorio predeterminado de Nginx
COPY --from=build /app/dist/sistema-pago-frontend /usr/share/nginx/html

# Exponer el puerto 80 para Nginx
EXPOSE 80

# Comando predeterminado para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]