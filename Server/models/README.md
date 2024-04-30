# Models
Esta carpeta contiene los modelos de datos que representan las entidades de la aplicación y llaman al DAO para ya sea obtener,agregar,modificar y eliminar en la base de datos.

# Posibles archivos
Todo esto bajo lo posible a crearse ya que puede ser que se tenga que agregar archivos o eliminarlos.

TO-DO

`ProfesorModel.js`: Archivo que contiene la representación y comportamientos del modelo Profesor. Llama al DAO para la interacción en la base de datos. 

`AsistenteModel.js`: Archivo que contiene la representación y comportamientos del modelo Asistente. Llama al DAO para la interacción en la base de datos. 

`EquipoGuiaModel.js`:Archivo que contiene la representación y comportamientos del modelo EquipoGuia. Llama al DAO para la interacción en la base de datos. 

`EstudianteModel.js`: Archivo que contiene la representación y comportamientos del modelo Estudiante. Llama al DAO para la interacción en la base de datos. . 

`ActividadModel.js`: Archivo que contiene la representación y comportamientos del modelo Actividad. Llama al DAO para la interacción en la base de datos. 

`ComentarioModel.js`: Archivo que contiene la representación y comportamientos del modelo Comentario. Llama al DAO para la interacción en la base de datos. . 

(Actualización 30/04/24)
Se necesita implementar los esquemas de los datos que contiene las entidades de la aplicación, esto se logra viendo el diagrama lógico (cómo se estructura) en conjunto con los digramas de la base de datos (los tipos de datos)  no deben de ser iguales que a las de las bases de datos obvio, pero si similares como por ejemplo si hay un campo de varchar, entonces es un string, etc... (mas detalles después)