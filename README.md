# Leer primero
El proyecto fue creado para aprendizaje. Se desarrollo con el fin de aprender y aplicar conocimientos del lenguaje de programación Java, Spring Boot, Angular, Pruebas Unitarias, Junit, Mockito, Docker, SOLID, API REST. Los datos que se encuentran en la base de datos son ficticios y no representan a ninguna persona o entidad.

# sistema-pago-interfaz
Este proyecto es una Interfaz creada con Angular CLI 16 para el consumo de la API REST Sistema-pago la cual puedes encontrar en [sistema-pago-backend](https://github.com/Axel-Guzman-20/Sistema-pago-). Incluye funcionalidades para realizar transacciones con tarjetas, con validaciones específicas y reglas de negocio implementadas. Además, se ha diseñado para seguir principios de diseño SOLID, garantizando un código limpio y mantenible.
La documentación la puedes encontrar en [documentación](https://drive.google.com/drive/folders/1vUBCkzgZM8efa4chF9swzLUzf2uSlbvw?usp=drive_link)


# Requisitos
- Angular CLI 16
- Node. js 12.20.0 o superior
- Docker (opcional, para ejecutar la aplicación en un contenedor)

# Instalación con Docker
Clona el repositorio:
```sh
git clone https://github.com/Axel-Guzman-20/sistema-pago-interfaz.git
```
Entrar en la carpeta
```sh
cd sistema-pago-interfaz
```
Construye la imagen de Docker:
```sh
docker build -t sistema-pago-frontend .
```
Ejecuta el contenedor:
```sh
docker run -p 4200:80 sistema-pago-frontend
```
Una vez ejecutado el contenedor la aplicacion podra visualizarse en el navegador en la ruta http://localhost:4200

# Instalación sin Docker
Clona el repositorio:
```sh
git clone https://github.com/Axel-Guzman-20/sistema-pago-interfaz.git
```
Entrar en la carpeta
```sh
cd sistema-pago-interfaz
```
Ejecuta el comando:
```sh
npm install
```
Posteriormente ejecuta el comando:
```sh
ng serve -o
```
Una vez ejecutado los comandos la aplicacion podra visualizarse en el navegador en la ruta http://localhost:4200
