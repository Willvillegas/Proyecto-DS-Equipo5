# DAO
Contiene los Data Access Objects, que se encargan de interactuar directamente con la base de datos y son los encargados de enviar y recibir los datos a los modelos.
(implementado por medio de la base de datos MSSQL)

(no se utilizará una interface por el momento, porque no sé como funcionan correctamente las herencias aqui XD )


# Métodos por implementar en las clases
* getById
* getAll
* create
* update
* delete
* (si falta alguno lo agregan)

# Posibles archivos
Todo esto bajo lo posible a crearse ya que puede ser que se tenga que agregar archivos o eliminarlos.

TO-DO

`ConnectionDAO.js` Archivo usado por las demás clases de esta carpeta para la conexión a la base datos. este archivo usa el patrón creacional singleton.

`ProfesorDAO.js`: Archivo que encarga de gestionar los datos para el modelo Profesor.

`AsistenteDAO.js`: Archivo que encarga de gestionar los datos para el modelo Asistente.

`EquipoGuiaDAO.js`:Archivo que encarga de gestionar los datos para el modelo EquipoGuia.

`EstudianteDAO.js`: Archivo que encarga de gestionar los datos para el modelo Estudiante.

`ActividadDAO.js`: Archivo que encarga de gestionar los datos para el modelo Actividad.

`ComentarioDAO.js`: Archivo que encarga de gestionar los datos para el modelo Comentario.