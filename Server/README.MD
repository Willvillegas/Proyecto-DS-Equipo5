# Backend nodejs
Esta carpeta contiene la lógica del backend que es una API que funcionará para que el frontend pueda enviarle o recibir información por parte del backend.
> [!NOTE]
> los datos que reciba o envie el backend será tratado por medio de JSON, excepto en los casos en que sea imágenes o archivos (excel)


## Estructuras de carpetas
`routes/`: Contiene los archivos de enrutamiento, donde se definen las rutas de la API y se asignan los middlewares y controladores correspondientes.

`middleware/`: Contiene los archivos que interactuan tanto con las solicitudes entrantes como con las respuestas salientes antes de llegar a los controladores, en otras palabras es como un puente de validación (implicando posibiblemente que el middleware se involucre con los modelos) ((route) <==> (middleware) <==> (controller))

`controllers/`: Esta contiene los controladores que manejan las solicitudes HTTP y dirige el flujo hacia los modelos correspondientes.

`models/`: Contiene los modelos de datos que representan las entidades de la aplicación y llaman al DAO.

`DAOs/`: Contiene los Data Access Objects, que se encargan de interactuar directamente con la base de datos y son los encargados de enviar y recibir los datos a los modelos.

## Instalar dependencias
Se necesita buscarlo en la página principal de [npm](https://www.npmjs.com/), ya que ahí aparece el comando que debe de escribir para  instalarlo, luego abre consola y en la carpeta raiz del proyecto, escribirmos:
```sh
npm install <paquete a instalar>
```

## Dependencias que se están usando hasta el momento:
* cookie-parser
* cors
* dotenv
* express
* jsonwebtoken

## Sugerencias  o Cambios
> [!NOTE]
> Esta es una propuesta de implementación de la estructura de los archivos. Pensandolo en cumplir el objetivo de los principios SOLID. Si tienen otras ideas de implementación o consideran que hay que hacer cambios comuniquelo lo antes posible.
