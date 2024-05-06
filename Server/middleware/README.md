# Middleware
Contiene los archivos que interactuan con las solicitudes entrantes previas a llegar al controlador, en otras palabras es como un puente de validación (implicando posibiblemente que el middleware se involucre con modelos de la aplicación) ((route) <==> (middleware) <==> (controller))

# Posibles archivos
Todo esto bajo lo posible a crearse ya que puede ser que se tenga que agregar archivos o eliminarlos.

TO-DO

`UsuarioMiddleware.js`: Archivo encargado en la validación de la sesión del usuario (profesor o asistente)

`ProfesorMiddleware.js`: Archivo que contiene posibles validaciones del modelo Profesor (pueden ser validaciones de acceso o de validación de datos). 

`AsistenteMiddleware.js`: Archivo que contiene posibles validaciones del modelo Asistente (pueden ser validaciones de acceso o de validación de datos).

`EquipoGuiaMiddleware.js`:Archivo que contiene posibles validaciones del modelo EquipoGuia (pueden ser validaciones de acceso o de validación de datos).

`EstudianteMiddleware.js`: Archivo que contiene posibles validaciones del modelo Estudiante (pueden ser validaciones de acceso o de validación de datos).

`ActividadMiddleware.js`: Archivo que contiene posibles validaciones del modelo Actividad (pueden ser validaciones de acceso o de validación de datos).

`ComentarioMiddleware.js`: Archivo que contiene posibles validaciones del modelo Comentario (pueden ser validaciones de acceso o de validación de datos).