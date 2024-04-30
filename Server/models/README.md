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
Se necesita implementar los esquemas de los datos que contiene las entidades de la aplicación, esto se logra viendo el diagrama lógico (cómo se estructura y sus tipos de datos)
[Link del diagrama](https://drive.google.com/file/d/1pcFyfyDL1DzV_WjK7x1FPDm5p0ZLC07W/view?usp=sharing)


lista de archivos:

`Profesor.js`
Atributos:
* codigoUnico:String
* nombre: String
* apellidos : String
* numeroTelefonicoOficina: String
* rol: String (Si son de tipo enumeration)
* activo: boolean
* sede: String (Si son de tipo enumeration)

y asi con las demás entidades...

`Asistente.js`

`EquipoGuia.js`

`Estudiante.js`

`Actividad.js`

`Comentario.js`