# ¿Cómo trabajar en el código?
## Tecnologías a usar en este proyecto:
+ Nodejs
+ Vitejs
+ MS-SQL
## Librerías a usar
+ express
+ nodemailer
+ tailwind

## Servicio de la nube a usar:
+ Netlify

## Requisitos previos
### ¿Git instalado?
Antes de comenzar, asegúrate de tener instalado Git en tu sistema. Puedes descargarlo desde el sitio web oficial de [Git](https://git-scm.com/downloads)

### ¿Node.js instalado?
Si no lo tienes instalado Node.js puede descargarlo por acá: [Nodejs](https://nodejs.org/en/download/current)

(No olvide de instalar el gestor de paquetes NPM)


## Primeros pasos.
### 1- ¿Cómo clonar el repositorio?
> [!NOTE]
> Recuerde que para usar comandos git debe de tener instalado y configurado el git con su usuario.

Para clonar el repositorio, debemos de abrir consola o CMD y luego buscar la ubicación en donde desea guardarlo. A continuación escriba el siguiente comando:
```sh
git clone https://github.com/Willvillegas/Proyecto-DS-Equipo5.git
```


### 2- Instalar los paquetes que necesite para que funcione el proyecto.
> [!CAUTION]
> Por defecto, en el proyecto no están instaladas las dependencias. Entonces hay que instalarlas

#### ¿cómo hacerlo?
Vamos al directorio del proyecto por medio de consola, accede a la carpeta de interés ya sea Client o Server, escribimos el siguiente comando:
```sh
npm install 
```
### 3- ¿Cómo ejecutar el proyecto?
Existen muchas formas de como ejecutarlo tales como:
> [!WARNING]
> El comando previo solo se puede ejecutar si y sólo si el documento package.json está configurado (específicamente en el apartado de scripts)
```sh
npm run dev
```
También está la ejecución personalizada de archivos (sólo backend o server)
```sh
node --watch <archivo.js>  
```



## Antes de codificar,  verifica si.....
### ¿El repo está actualizado?
Ya sea si es la primera vez que va a empezar a codificar o va a continuar codificando. Verifica si los demás han hecho cambios para evitar conflictos.
#### ¿Cómo hacerlo?
Ejecuta el siguiente comando en consola, ubicado en la carpeta raíz del proyecto:
```shell
git checkout main
git pull origin main
```
Con lo anterior se mantiene actulizado de los últimos cambios.


## Quiero subir lo que he realizado ¿Cómo lo hago?
Para subir los nuevos archivos o cambios, puede hacerlo de 2 formas:
### 1- Usando VScode.
La extensión git cuenta funcionalidades que facilitan la carga de archivos al repo. Revise tutoriales en internet o youtube, no es complicado. :-)
### 2- Usando consola (forma complicada)
Tiene que escribir los siguientes comandos en la carpeta raiz del proyecto:
```shell
git add .
git commit -m "Mensaje descriptivo de tus cambios"
git push origin main
```

## Necesito instalar un paquete ¿Cómo lo hago?
Se necesita buscarlo en la página principal de [npm](https://www.npmjs.com/), ya que ahí aparece el comando que debe de escribir para  instalarlo, luego abre consola y en la carpeta raiz del proyecto, escribirmos:
```sh
npm install <paquete a instalar>
```
