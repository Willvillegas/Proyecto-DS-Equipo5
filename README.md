# Proyecto DS Grupo #5
## Requerimientos funcionales
| ID  | Descripción  |
|----|--------------|
| RF01 | El sistema deberá permitir iniciar sesión con correo electrónico y contraseña, previamente registrados en la base de datos. |
| RF02 | El sistema deberá permitir a los usuarios cambiar su contraseña en caso de olvidarla. |
| RF03 | El sistema deberá encriptar la contraseña actualizada y almacenarla en la base de datos. |
| RF04 | El sistema deberá establecer relaciones con las bases de datos de profesores guías activos, asistentes administrativas de cada campus y estudiantes. |
| RF05 | El sistema deberá permitir el acceso según el rol del usuario (profesor guía, profesor coordinador, asistente administrativa, estudiante), restringiendo el acceso a usuarios registrados previamente en las bases de datos. |
| RF06 | La contraseña del sistema debe tener 8 dígitos numéricos. |
| RF07 | El sistema deberá permitir a las asistentes administrativas realizar funciones específicas, como cambiar el profesor guía del equipo, modificar la información del profesor guía y dar de baja a un profesor guía. |
| RF08 | El sistema deberá permitir a las asistentes administrativas asignar profesores guía a un equipo por medio de una lista de los profesores de la sede correspondiente. |
| RF09 | El sistema deberá permitir a las asistentes administrativas consultar el plan de trabajo completo y ver el detalle de la próxima actividad a realizarse del equipo de profesores guía (sin comentarios) de acuerdo con el plan y considerando la fecha del sistema. |
| RF10 | El sistema deberá permitir únicamente a la asistente administrativa de Cartago asignar un único coordinador en cada equipo de trabajo. |
| RF11 (Revisar) | El sistema deberá brindar una hoja en Excel con la información básica de contacto de los estudiantes de primer ingreso que se matricularon en la sede a la que pertenece la asistente. |
| RF12 | El sistema no deberá permitir la eliminación de información de profesores ni la modificación de sus códigos. |
| RF13 | El sistema no deberá permitir la modificación de profesores guías de otras sedes por parte de asistentes administrativas que no pertenezcan a dichas sedes. |
| RF14 | El sistema deberá permitir a los profesores guías activos modificar sus datos. |
| RF15 |El sistema deberá permitir a los profesores guías activos obtener detalles del equipo guía al que pertenecen. |
| RF16 | El sistema deberá permitir a los profesores guías activos registrar observaciones y comentarios a una actividad del plan de trabajo. |
| RF17 | El sistema deberá permitir la generación de un archivo Excel con la lista de estudiantes, organizados por campus, para los profesores guías activos. |
| RF18 | El sistema deberá permitir a los profesores guías activos modificar alguna información particular de un estudiante en específico si y sólo si pertenece a su sede.  |
| RF19 | El sistema deberá permitir a los profesores guías activos visualizar el plan de trabajo registrado por el coordinador tanto con comentarios o sin ellos.  |
| RF20 | El sistema deberá permitir al profesor coordinador del equipo la definición del plan de trabajo por semanas. |
| RF21 | El sistema deberá permitir al profesor coordinador del equipo la activación de la publicidad de la actividad. |
| RF22 | El sistema deberá permitir al profesor coordinador del equipo la cancelación de una actividad o marcar una actividad como realizada. |
| RF23 | El sistema deberá permitir clasificar las actividades según su índole como Orientadoras, Motivacionales, Apoyo a la vida estudiantil, Orden técnico o Recreación. |
| RF24 | El sistema deberá permitir el registro de actividades con la información como semana (1-16), tipo y nombre, fecha y hora, responsables (1-N), fecha de publicación, fecha de recordatorios, presencial o remota, enlace y afiche (PDF o JPG). |
| RF25 | El sistema deberá permitir la asignación de un estado a las actividades (planeada, notificada, realizada o cancelada). |
| RF26 | El sistema deberá permitir la publicación de actividades a los estudiantes. |
| RF27 | El sistema deberá permitir la inserción de evidencias en actividades realizadas. |
| RF28 | El sistema deberá permitir la réplica o respuesta a comentarios de actividades, creando un historial. |
| RF29 | El sistema deberá permitir agregar una observación a la actividad y dejar el registro de la fecha en caso de cancelación de la actividad. |
| RF30 | El plan de trabajo del sistema deberá cubrir un itinerario de actividades durante las 16 semanas lectivas del período. |
| RF31 | El sistema deberá respetar las restricciones y formatos establecidos para la información de las bases de datos de profesores y asistentes administrativas. |

## Requerimientos No Funcionales.....

| ID  | Descripción  |
|----|--------------|
| RNF01 | El sistema deberá garantizar la seguridad de los datos sensibles por medio de la encriptación adecuada. |
| RNF02 | Para el sistema deberá ser posible agregar nuevas funcionalidades y expandir el sistema sin afectar su estabilidad. |
| RNF03 | El sistema deberá ser compatible con diferentes navegadores web. |
| RNF04 | El sistema deberá estar disponible en todo momento, con un tiempo de inactividad mínimo planificado para mantenimiento o actualizaciones. |
| RNF05 | El sistema deberá tener tiempos de respuesta rápidos para garantizar una experiencia de usuario fluida. |
| RNF06 | La interfaz de usuario deberá ser intuitiva y fácil de usar para todos los tipos de usuarios. |


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



## Antes de subir los cambios,  verifica si.....
### 1- Hice commit de los cambios?
Para subir los nuevos archivos o cambios, puede hacerlo de 2 formas:
#### 1.1- Usando VScode.
La extensión git cuenta funcionalidades que facilitan la carga de archivos al repo. Revise tutoriales en internet o youtube, no es complicado. :-)
#### 1.2- Usando consola (forma complicada)
Tiene que escribir los siguientes comandos en la carpeta raiz del proyecto:
```shell
git add .
git commit -m "Mensaje descriptivo de tus cambios"
```
### 2- ¿El repo está actualizado?
Ya sea si es la primera vez que va a empezar a codificar o va a continuar codificando. Verifica si los demás han hecho cambios para evitar conflictos.
#### ¿Cómo hacerlo?
Ejecuta el siguiente comando en consola, ubicado en la carpeta raíz del proyecto:
```shell
git checkout main
git pull origin main
```
Con lo anterior se mantiene actulizado de los últimos cambios.
### 3-Rebasa tu rama con la rama principal (opcional)
 Si hay cambios en la rama principal desde que creaste tu rama, es posible que desees rebasar tu rama con la rama principal para integrar esos cambios. Puedes hacerlo ejecutando: 
 ```shell
 git rebase main
 ``` 
 mientras estás en tu rama.

### 4-Sube tus cambios: 
Una vez que estés listo para subir tus cambios al repositorio remoto, puedes hacerlo ejecutando 
```shell
git push origin nombre-de-tu-rama
```
Esto enviará tus cambios a GitHub en tu rama específica.

## Necesito instalar un paquete ¿Cómo lo hago?
Se necesita buscarlo en la página principal de [npm](https://www.npmjs.com/), ya que ahí aparece el comando que debe de escribir para  instalarlo, luego abre consola y en la carpeta raiz del proyecto, escribirmos:
```sh
npm install <paquete a instalar>
```
