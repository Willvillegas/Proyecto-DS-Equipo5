/****** Object:  Database [ProyectoDSG5]    Script Date: 22/6/2024 09:32:03 p. m. ******/
CREATE DATABASE [ProyectoDSG5]  (EDITION = 'Basic', SERVICE_OBJECTIVE = 'Basic', MAXSIZE = 2 GB) WITH CATALOG_COLLATION = SQL_Latin1_General_CP1_CI_AS, LEDGER = OFF;
GO
ALTER DATABASE [ProyectoDSG5] SET COMPATIBILITY_LEVEL = 150
GO
ALTER DATABASE [ProyectoDSG5] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET ARITHABORT OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ProyectoDSG5] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ProyectoDSG5] SET ALLOW_SNAPSHOT_ISOLATION ON 
GO
ALTER DATABASE [ProyectoDSG5] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ProyectoDSG5] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [ProyectoDSG5] SET  MULTI_USER 
GO
ALTER DATABASE [ProyectoDSG5] SET ENCRYPTION ON
GO
ALTER DATABASE [ProyectoDSG5] SET QUERY_STORE = ON
GO
ALTER DATABASE [ProyectoDSG5] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1024, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
/*** The scripts of database scoped configurations in Azure should be executed inside the target database connection. ***/
GO
-- ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 8;
GO
/****** Object:  Table [dbo].[Actividad]    Script Date: 22/6/2024 09:32:04 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Actividad](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[semana] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[previos] [int] NOT NULL,
	[fechaPublicacion] [datetime] NOT NULL,
	[recordatorios] [int] NOT NULL,
	[enlace] [varchar](max) NOT NULL,
	[afiche] [varbinary](max) NOT NULL,
	[idTipo] [int] NOT NULL,
	[idModalidad] [int] NOT NULL,
	[idEstado] [int] NOT NULL,
	[idPlan] [int] NOT NULL,
	[responsables] [varchar](1024) NOT NULL,
	[nombre] [varchar](128) NULL,
 CONSTRAINT [PK_Actividad] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Asistente]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Asistente](
	[id] [int] NOT NULL,
	[nombre] [varchar](128) NOT NULL,
	[apellidos] [varchar](128) NOT NULL,
	[idSede] [int] NOT NULL,
 CONSTRAINT [PK_Asistente_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cancelacion]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cancelacion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[observacion] [varchar](1024) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[idActividad] [int] NOT NULL,
 CONSTRAINT [PK_Cancelacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comentario]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comentario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](1024) NOT NULL,
	[cuerpo] [varchar](2048) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[idProfesor] [int] NOT NULL,
	[idActividad] [int] NOT NULL,
 CONSTRAINT [PK_Comentario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EquipoAsistente]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EquipoAsistente](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idEquipo] [int] NOT NULL,
	[idAsistente] [int] NOT NULL,
	[idEstado] [int] NOT NULL,
 CONSTRAINT [PK_EquipoAsistente] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EquipoGuia]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EquipoGuia](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[generacion] [varchar](128) NOT NULL,
	[idEstado] [int] NOT NULL,
 CONSTRAINT [PK_EquipoGuia] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EquipoProfesor]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EquipoProfesor](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idEquipo] [int] NOT NULL,
	[idProfesor] [int] NOT NULL,
	[idEstado] [int] NOT NULL,
 CONSTRAINT [PK_EquipoProfesor] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Estado]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estado](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](128) NOT NULL,
 CONSTRAINT [PK_Estado] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EstadoActividad]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EstadoActividad](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](128) NOT NULL,
 CONSTRAINT [PK_EstadoActividad] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Estudiante]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estudiante](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[carnet] [varchar](128) NOT NULL,
	[apellido1] [varchar](128) NOT NULL,
	[apellido2] [varchar](128) NOT NULL,
	[correo] [varchar](128) NOT NULL,
	[telefono] [varchar](128) NOT NULL,
	[idSede] [int] NOT NULL,
	[idEstado] [int] NOT NULL,
	[idEquipo] [int] NOT NULL,
	[nombre] [varchar](128) NOT NULL,
	[foto] [varbinary](max) NULL,
 CONSTRAINT [PK_Estudiante] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EstudianteUsuario]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EstudianteUsuario](
	[id] [int] NOT NULL,
	[idEstudiante] [int] NOT NULL,
	[foto] [varbinary](max) NULL,
 CONSTRAINT [PK_EstudianteUsuario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Evidencia]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Evidencia](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dato] [varbinary](max) NOT NULL,
	[idActividad] [int] NOT NULL,
 CONSTRAINT [PK_Evidencia] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Foto]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Foto](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[foto] [varbinary](max) NOT NULL,
	[idProfesor] [int] NOT NULL,
 CONSTRAINT [PK_Foto] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HistorialModificacion]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HistorialModificacion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idProfesor] [int] NOT NULL,
	[idAsistente] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[datos] [varchar](max) NOT NULL,
 CONSTRAINT [PK_HistorialModificacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Modalidad]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Modalidad](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](128) NOT NULL,
 CONSTRAINT [PK_Modalidad] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Notificacion]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notificacion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idEstudianteUsuario] [int] NOT NULL,
	[idActividad] [int] NOT NULL,
	[creacion] [datetime] NULL,
	[emisor] [varchar](128) NOT NULL,
	[contenido] [varchar](512) NOT NULL,
	[idEstado] [int] NOT NULL,
	[visto] [int] NOT NULL,
 CONSTRAINT [PK_Notificacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Plan]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Plan](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](128) NOT NULL,
	[idEstado] [int] NOT NULL,
	[idEquipo] [int] NOT NULL,
 CONSTRAINT [PK_Plan] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profesor]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Profesor](
	[id] [int] NOT NULL,
	[codigo] [varchar](128) NOT NULL,
	[nombre] [varchar](128) NOT NULL,
	[apellidos] [varchar](128) NOT NULL,
	[telOficina] [varchar](128) NOT NULL,
	[telPersonal] [varchar](128) NOT NULL,
	[idSede] [int] NOT NULL,
	[idTipo] [int] NOT NULL,
 CONSTRAINT [PK_Profesor] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Recordatorio]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Recordatorio](
	[id] [int] NOT NULL,
	[fechaRecordatorio] [datetime] NOT NULL,
 CONSTRAINT [PK_Recordatorio] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RegistroErrores]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RegistroErrores](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[NombreUsuario] [varchar](128) NULL,
	[Numero] [int] NULL,
	[Mensaje] [varchar](max) NULL,
	[Estado] [int] NULL,
	[Gravedad] [int] NULL,
	[Linea] [int] NULL,
	[Fecha] [datetime] NULL,
	[Procedimineto] [varchar](max) NULL,
 CONSTRAINT [PK_RegistroErrores] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Responsable]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Responsable](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idProfesor] [int] NOT NULL,
	[idActividad] [int] NOT NULL,
	[idEstado] [int] NOT NULL,
 CONSTRAINT [PK_Responsable] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuesta]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuesta](
	[id] [int] NOT NULL,
	[idMensaje] [int] NOT NULL,
 CONSTRAINT [PK_Respuesta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sede]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sede](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](128) NOT NULL,
 CONSTRAINT [PK_Sede] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoActividad]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoActividad](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](128) NOT NULL,
 CONSTRAINT [PK_TipoActividad] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoProfesor]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoProfesor](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](128) NOT NULL,
 CONSTRAINT [PK_TipoProfesor] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoUsuario]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoUsuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](128) NOT NULL,
 CONSTRAINT [PK_TipoUsuario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 22/6/2024 09:32:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[correo] [varchar](128) NOT NULL,
	[contrasenna] [varchar](128) NOT NULL,
	[idTipo] [int] NOT NULL,
	[idEstado] [int] NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Index [IX_Asistente]    Script Date: 22/6/2024 09:32:05 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Asistente] ON [dbo].[Asistente]
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Actividad]  WITH CHECK ADD  CONSTRAINT [FK_Actividad_EstadoActividad] FOREIGN KEY([idEstado])
REFERENCES [dbo].[EstadoActividad] ([id])
GO
ALTER TABLE [dbo].[Actividad] CHECK CONSTRAINT [FK_Actividad_EstadoActividad]
GO
ALTER TABLE [dbo].[Actividad]  WITH CHECK ADD  CONSTRAINT [FK_Actividad_Modalidad] FOREIGN KEY([idModalidad])
REFERENCES [dbo].[Modalidad] ([id])
GO
ALTER TABLE [dbo].[Actividad] CHECK CONSTRAINT [FK_Actividad_Modalidad]
GO
ALTER TABLE [dbo].[Actividad]  WITH CHECK ADD  CONSTRAINT [FK_Actividad_Plan] FOREIGN KEY([idPlan])
REFERENCES [dbo].[Plan] ([id])
GO
ALTER TABLE [dbo].[Actividad] CHECK CONSTRAINT [FK_Actividad_Plan]
GO
ALTER TABLE [dbo].[Actividad]  WITH CHECK ADD  CONSTRAINT [FK_Actividad_TipoActividad] FOREIGN KEY([idTipo])
REFERENCES [dbo].[TipoActividad] ([id])
GO
ALTER TABLE [dbo].[Actividad] CHECK CONSTRAINT [FK_Actividad_TipoActividad]
GO
ALTER TABLE [dbo].[Asistente]  WITH CHECK ADD  CONSTRAINT [FK_Asistente_Sede] FOREIGN KEY([idSede])
REFERENCES [dbo].[Sede] ([id])
GO
ALTER TABLE [dbo].[Asistente] CHECK CONSTRAINT [FK_Asistente_Sede]
GO
ALTER TABLE [dbo].[Asistente]  WITH CHECK ADD  CONSTRAINT [FK_Asistente_Usuario] FOREIGN KEY([id])
REFERENCES [dbo].[Usuario] ([id])
GO
ALTER TABLE [dbo].[Asistente] CHECK CONSTRAINT [FK_Asistente_Usuario]
GO
ALTER TABLE [dbo].[Cancelacion]  WITH CHECK ADD  CONSTRAINT [FK_Cancelacion_Actividad] FOREIGN KEY([idActividad])
REFERENCES [dbo].[Actividad] ([id])
GO
ALTER TABLE [dbo].[Cancelacion] CHECK CONSTRAINT [FK_Cancelacion_Actividad]
GO
ALTER TABLE [dbo].[Comentario]  WITH CHECK ADD  CONSTRAINT [FK_Comentario_Actividad] FOREIGN KEY([idActividad])
REFERENCES [dbo].[Actividad] ([id])
GO
ALTER TABLE [dbo].[Comentario] CHECK CONSTRAINT [FK_Comentario_Actividad]
GO
ALTER TABLE [dbo].[Comentario]  WITH CHECK ADD  CONSTRAINT [FK_Comentario_Profesor] FOREIGN KEY([idProfesor])
REFERENCES [dbo].[Profesor] ([id])
GO
ALTER TABLE [dbo].[Comentario] CHECK CONSTRAINT [FK_Comentario_Profesor]
GO
ALTER TABLE [dbo].[EquipoAsistente]  WITH CHECK ADD  CONSTRAINT [FK_EquipoAsistente_EquipoGuia] FOREIGN KEY([idEquipo])
REFERENCES [dbo].[EquipoGuia] ([id])
GO
ALTER TABLE [dbo].[EquipoAsistente] CHECK CONSTRAINT [FK_EquipoAsistente_EquipoGuia]
GO
ALTER TABLE [dbo].[EquipoAsistente]  WITH CHECK ADD  CONSTRAINT [FK_EquipoAsistente_Estado] FOREIGN KEY([idEstado])
REFERENCES [dbo].[Estado] ([id])
GO
ALTER TABLE [dbo].[EquipoAsistente] CHECK CONSTRAINT [FK_EquipoAsistente_Estado]
GO
ALTER TABLE [dbo].[EquipoGuia]  WITH CHECK ADD  CONSTRAINT [FK_EquipoGuia_Estado] FOREIGN KEY([idEstado])
REFERENCES [dbo].[Estado] ([id])
GO
ALTER TABLE [dbo].[EquipoGuia] CHECK CONSTRAINT [FK_EquipoGuia_Estado]
GO
ALTER TABLE [dbo].[EquipoProfesor]  WITH CHECK ADD  CONSTRAINT [FK_EquipoProfesor_EquipoGuia] FOREIGN KEY([idEquipo])
REFERENCES [dbo].[EquipoGuia] ([id])
GO
ALTER TABLE [dbo].[EquipoProfesor] CHECK CONSTRAINT [FK_EquipoProfesor_EquipoGuia]
GO
ALTER TABLE [dbo].[EquipoProfesor]  WITH CHECK ADD  CONSTRAINT [FK_EquipoProfesor_Estado] FOREIGN KEY([idEstado])
REFERENCES [dbo].[Estado] ([id])
GO
ALTER TABLE [dbo].[EquipoProfesor] CHECK CONSTRAINT [FK_EquipoProfesor_Estado]
GO
ALTER TABLE [dbo].[EquipoProfesor]  WITH CHECK ADD  CONSTRAINT [FK_EquipoProfesor_Profesor] FOREIGN KEY([idProfesor])
REFERENCES [dbo].[Profesor] ([id])
GO
ALTER TABLE [dbo].[EquipoProfesor] CHECK CONSTRAINT [FK_EquipoProfesor_Profesor]
GO
ALTER TABLE [dbo].[Estudiante]  WITH CHECK ADD  CONSTRAINT [FK_Estudiante_EquipoGuia] FOREIGN KEY([idEquipo])
REFERENCES [dbo].[EquipoGuia] ([id])
GO
ALTER TABLE [dbo].[Estudiante] CHECK CONSTRAINT [FK_Estudiante_EquipoGuia]
GO
ALTER TABLE [dbo].[Estudiante]  WITH CHECK ADD  CONSTRAINT [FK_Estudiante_Estado] FOREIGN KEY([idEstado])
REFERENCES [dbo].[Estado] ([id])
GO
ALTER TABLE [dbo].[Estudiante] CHECK CONSTRAINT [FK_Estudiante_Estado]
GO
ALTER TABLE [dbo].[Estudiante]  WITH CHECK ADD  CONSTRAINT [FK_Estudiante_Sede] FOREIGN KEY([idSede])
REFERENCES [dbo].[Sede] ([id])
GO
ALTER TABLE [dbo].[Estudiante] CHECK CONSTRAINT [FK_Estudiante_Sede]
GO
ALTER TABLE [dbo].[EstudianteUsuario]  WITH CHECK ADD  CONSTRAINT [FK_EstudianteUsuario_Estudiante] FOREIGN KEY([idEstudiante])
REFERENCES [dbo].[Estudiante] ([id])
GO
ALTER TABLE [dbo].[EstudianteUsuario] CHECK CONSTRAINT [FK_EstudianteUsuario_Estudiante]
GO
ALTER TABLE [dbo].[EstudianteUsuario]  WITH CHECK ADD  CONSTRAINT [FK_EstudianteUsuario_Usuario] FOREIGN KEY([id])
REFERENCES [dbo].[Usuario] ([id])
GO
ALTER TABLE [dbo].[EstudianteUsuario] CHECK CONSTRAINT [FK_EstudianteUsuario_Usuario]
GO
ALTER TABLE [dbo].[Evidencia]  WITH CHECK ADD  CONSTRAINT [FK_Evidencia_Actividad] FOREIGN KEY([idActividad])
REFERENCES [dbo].[Actividad] ([id])
GO
ALTER TABLE [dbo].[Evidencia] CHECK CONSTRAINT [FK_Evidencia_Actividad]
GO
ALTER TABLE [dbo].[Foto]  WITH CHECK ADD  CONSTRAINT [FK_Foto_Profesor] FOREIGN KEY([idProfesor])
REFERENCES [dbo].[Profesor] ([id])
GO
ALTER TABLE [dbo].[Foto] CHECK CONSTRAINT [FK_Foto_Profesor]
GO
ALTER TABLE [dbo].[HistorialModificacion]  WITH CHECK ADD  CONSTRAINT [FK_HistorialModificacion_Profesor] FOREIGN KEY([idProfesor])
REFERENCES [dbo].[Profesor] ([id])
GO
ALTER TABLE [dbo].[HistorialModificacion] CHECK CONSTRAINT [FK_HistorialModificacion_Profesor]
GO
ALTER TABLE [dbo].[Notificacion]  WITH CHECK ADD  CONSTRAINT [FK_Notificacion_Actividad] FOREIGN KEY([idActividad])
REFERENCES [dbo].[Actividad] ([id])
GO
ALTER TABLE [dbo].[Notificacion] CHECK CONSTRAINT [FK_Notificacion_Actividad]
GO
ALTER TABLE [dbo].[Notificacion]  WITH CHECK ADD  CONSTRAINT [FK_Notificacion_Estado] FOREIGN KEY([idEstado])
REFERENCES [dbo].[Estado] ([id])
GO
ALTER TABLE [dbo].[Notificacion] CHECK CONSTRAINT [FK_Notificacion_Estado]
GO
ALTER TABLE [dbo].[Notificacion]  WITH CHECK ADD  CONSTRAINT [FK_Notificacion_EstudianteUsuario] FOREIGN KEY([idEstudianteUsuario])
REFERENCES [dbo].[EstudianteUsuario] ([id])
GO
ALTER TABLE [dbo].[Notificacion] CHECK CONSTRAINT [FK_Notificacion_EstudianteUsuario]
GO
ALTER TABLE [dbo].[Plan]  WITH CHECK ADD  CONSTRAINT [FK_Plan_EquipoGuia] FOREIGN KEY([idEquipo])
REFERENCES [dbo].[EquipoGuia] ([id])
GO
ALTER TABLE [dbo].[Plan] CHECK CONSTRAINT [FK_Plan_EquipoGuia]
GO
ALTER TABLE [dbo].[Plan]  WITH CHECK ADD  CONSTRAINT [FK_Plan_Estado] FOREIGN KEY([idEstado])
REFERENCES [dbo].[Estado] ([id])
GO
ALTER TABLE [dbo].[Plan] CHECK CONSTRAINT [FK_Plan_Estado]
GO
ALTER TABLE [dbo].[Profesor]  WITH CHECK ADD  CONSTRAINT [FK_Profesor_Sede] FOREIGN KEY([idSede])
REFERENCES [dbo].[Sede] ([id])
GO
ALTER TABLE [dbo].[Profesor] CHECK CONSTRAINT [FK_Profesor_Sede]
GO
ALTER TABLE [dbo].[Profesor]  WITH CHECK ADD  CONSTRAINT [FK_Profesor_TipoProfesor] FOREIGN KEY([idTipo])
REFERENCES [dbo].[TipoProfesor] ([id])
GO
ALTER TABLE [dbo].[Profesor] CHECK CONSTRAINT [FK_Profesor_TipoProfesor]
GO
ALTER TABLE [dbo].[Profesor]  WITH CHECK ADD  CONSTRAINT [FK_Profesor_Usuario] FOREIGN KEY([id])
REFERENCES [dbo].[Usuario] ([id])
GO
ALTER TABLE [dbo].[Profesor] CHECK CONSTRAINT [FK_Profesor_Usuario]
GO
ALTER TABLE [dbo].[Recordatorio]  WITH CHECK ADD  CONSTRAINT [FK_Recordatorio_Notificacion] FOREIGN KEY([id])
REFERENCES [dbo].[Notificacion] ([id])
GO
ALTER TABLE [dbo].[Recordatorio] CHECK CONSTRAINT [FK_Recordatorio_Notificacion]
GO
ALTER TABLE [dbo].[Responsable]  WITH CHECK ADD  CONSTRAINT [FK_Responsable_Actividad] FOREIGN KEY([idActividad])
REFERENCES [dbo].[Actividad] ([id])
GO
ALTER TABLE [dbo].[Responsable] CHECK CONSTRAINT [FK_Responsable_Actividad]
GO
ALTER TABLE [dbo].[Responsable]  WITH CHECK ADD  CONSTRAINT [FK_Responsable_Estado] FOREIGN KEY([idEstado])
REFERENCES [dbo].[Estado] ([id])
GO
ALTER TABLE [dbo].[Responsable] CHECK CONSTRAINT [FK_Responsable_Estado]
GO
ALTER TABLE [dbo].[Responsable]  WITH CHECK ADD  CONSTRAINT [FK_Responsable_Profesor] FOREIGN KEY([idProfesor])
REFERENCES [dbo].[Profesor] ([id])
GO
ALTER TABLE [dbo].[Responsable] CHECK CONSTRAINT [FK_Responsable_Profesor]
GO
ALTER TABLE [dbo].[Respuesta]  WITH CHECK ADD  CONSTRAINT [FK_Respuesta_Mensaje] FOREIGN KEY([id])
REFERENCES [dbo].[Comentario] ([id])
GO
ALTER TABLE [dbo].[Respuesta] CHECK CONSTRAINT [FK_Respuesta_Mensaje]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_Estado] FOREIGN KEY([idEstado])
REFERENCES [dbo].[Estado] ([id])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_Estado]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_TipoUsuario] FOREIGN KEY([idTipo])
REFERENCES [dbo].[TipoUsuario] ([id])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_TipoUsuario]
GO
/****** Object:  StoredProcedure [dbo].[BuscarActividades]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarActividades]
(
    -- Parametros de entrada
	@idPlan INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT A.id,
			A.nombre,
			A.semana,
			A.fecha,
			A.previos,
			A.fechaPublicacion,
			A.recordatorios,
			A.enlace,
			A.afiche,
			A.responsables,
			TA.nombre AS tipo,
			M.nombre AS modalidad,
			EA.nombre AS estado
	FROM Actividad AS A
	INNER JOIN TipoActividad AS TA ON TA.id = A.idTipo
	INNER JOIN Modalidad AS M ON M.id = A.idModalidad
	INNER JOIN EstadoActividad AS EA ON EA.id = A.idEstado
	WHERE (@idPlan = 0 OR A.idPlan = @idPlan)

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarActividadId]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarActividadId]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT A.id,
			A.nombre,
			A.semana,
			A.fecha,
			A.previos,
			A.fechaPublicacion,
			A.recordatorios,
			A.enlace,
			A.afiche,
			A.responsables,
			TA.nombre AS tipo,
			M.nombre AS modalidad,
			EA.nombre AS estado,
			A.idPlan
	FROM Actividad AS A
	INNER JOIN TipoActividad AS TA ON TA.id = A.idTipo
	INNER JOIN Modalidad AS M ON M.id = A.idModalidad
	INNER JOIN EstadoActividad AS EA ON EA.id = A.idEstado
	WHERE A.id = @id

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarComentarios]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarComentarios]
(
    -- Parametros de entrada
	@idActividad INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT C.id,
			C.titulo,
			C.cuerpo,
			C.fecha,
			C.idProfesor,
			P.nombre
	FROM Comentario AS C
	INNER JOIN Profesor AS P ON P.id = C.idProfesor
	WHERE C.idActividad = @idActividad
	AND NOT EXISTS (SELECT 1 FROM Respuesta AS R
		WHERE R.id = C.id)
	

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarEquipoId]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarEquipoId]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT EG.id,
			EG.generacion
	FROM EquipoGuia AS EG
	WHERE idEstado = @ACTIVO
	AND id = @id;

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarEquipoProfesores]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarEquipoProfesores]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT U.id,
			P.nombre,
			P.apellidos,
			P.codigo,
			P.telOficina,
			P.telPersonal,
			S.nombre AS Sede,
			TP.nombre AS Tipo,
			U.correo,
			U.contrasenna
	FROM Profesor AS P
	INNER JOIN Usuario AS U ON U.id = P.id
	INNER JOIN Sede As S ON S.id = P.idSede
	INNER JOIN TipoProfesor AS TP ON TP.id = P.idTipo
	INNER JOIN EquipoProfesor AS EP ON EP.idProfesor = P.id
	WHERE U.idEstado = @ACTIVO
	AND EP.idEquipo = @id
	AND EP.idEstado = @ACTIVO

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarEquipos]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarEquipos]
(
    -- Parametros de entrada
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT EG.id,
			EG.generacion
	FROM EquipoGuia AS EG
	WHERE idEstado = @ACTIVO

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarEstudianteId]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarEstudianteId]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT E.id,
			E.carnet,
			E.nombre,
			E.apellido1,
			E.apellido2,
			E.correo,
			E.telefono,
			S.nombre AS Sede
	FROM Estudiante AS E
	INNER JOIN Sede As S ON S.id = E.idSede
	WHERE E.id = @id

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarEstudiantes]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarEstudiantes]
(
    -- Parametros de entrada
	@idEquipo INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT E.id,
			E.carnet,
			E.nombre,
			E.apellido1,
			E.apellido2,
			E.correo,
			E.telefono,
			S.nombre AS Sede
	FROM Estudiante AS E
	INNER JOIN Sede As S ON S.id = E.idSede
	WHERE E.idEstado = @ACTIVO
	AND E.idEquipo = @idEquipo

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarEstudianteUsuarioId]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarEstudianteUsuarioId]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT E.id,
			E.carnet,
			E.nombre,
			E.apellido1,
			E.apellido2,
			E.correo,
			E.telefono,
			S.nombre AS Sede,
			U.contrasenna
	FROM Usuario AS U
	INNER JOIN EstudianteUsuario AS EU ON EU.id = U.id
	INNER JOIN Estudiante AS E ON E.id = EU.idEstudiante
	INNER JOIN Sede As S ON S.id = E.idSede
	WHERE U.id = @id
	AND U.idEstado = @ACTIVO

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarFotoEstudiante]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarFotoEstudiante]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT E.id,
			E.nombre,
			E.foto
	FROM Estudiante AS E
	WHERE E.id = @id

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarNotificacion]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarNotificacion]
(
    -- Parametros de entrada
	@idEstudianteUsuario INT,
	@fecha DATETIME,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT N.id,
			N.idEstudianteUsuario,
			N.idActividad,
			N.creacion,
			N.emisor,
			N.contenido,
			N.visto,
			R.fechaRecordatorio
	FROM Notificacion AS N
	LEFT JOIN Recordatorio AS R ON R.id = N.id
	WHERE N.idEstudianteUsuario = @idEstudianteUsuario
	AND N.idEstado = @ACTIVO
	AND NOT EXISTS (SELECT 1 FROM Recordatorio AS RW
					 WHERE RW.id = N.id
					 AND CAST(R.fechaRecordatorio AS DATE) > CAST(@fecha AS DATE))
	AND CAST(N.creacion AS DATE) <= CAST(@fecha AS DATE)

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarNotificacionesHechas]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarNotificacionesHechas]
(
    -- Parametros de entrada
	@fecha DATETIME,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT N.id,
			N.idActividad,
			N.creacion,
			R.fechaRecordatorio
	FROM Notificacion AS N
	LEFT JOIN Recordatorio AS R ON R.id = N.id

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarNotificacionId]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarNotificacionId]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT N.id,
			N.idEstudianteUsuario,
			N.idActividad,
			N.creacion,
			N.emisor,
			N.contenido,
			N.visto,
			R.fechaRecordatorio
	FROM Notificacion AS N
	LEFT JOIN Recordatorio AS R ON R.id = N.id
	WHERE N.id = @id

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarPlanes]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarPlanes]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT P.id,
			P.nombre,
			EG.generacion
	FROM [dbo].[Plan] AS P
	INNER JOIN EquipoGuia AS EG ON EG.id = P.idEquipo
	WHERE P.idEstado = @ACTIVO
	AND P.idEquipo = @id;

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarPlanId]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarPlanId]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT P.id,
			P.nombre
	FROM [dbo].[Plan] AS P
	WHERE id = @id;

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarProfesores]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarProfesores]
(
    -- Parametros de entrada
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT U.id,
			P.nombre,
			P.apellidos,
			P.codigo,
			P.telOficina,
			P.telPersonal,
			S.nombre AS Sede,
			TP.nombre AS Tipo,
			U.correo,
			U.contrasenna
	FROM Profesor AS P
	INNER JOIN Usuario AS U ON U.id = P.id
	INNER JOIN Sede As S ON S.id = P.idSede
	INNER JOIN TipoProfesor AS TP ON TP.id = P.idTipo
	WHERE U.idEstado = @ACTIVO

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarProfesorId]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarProfesorId]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT P.nombre,
			P.apellidos,
			P.codigo,
			P.telOficina,
			P.telPersonal,
			S.nombre AS Sede,
			TP.nombre AS Tipo,
			U.correo,
			U.contrasenna
	FROM Profesor AS P
	INNER JOIN Usuario AS U ON U.id = P.id
	INNER JOIN Sede As S ON S.id = P.idSede
	INNER JOIN TipoProfesor AS TP ON TP.id = P.idTipo
	WHERE U.idEstado = @ACTIVO AND U.id = @id

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarRespuestas]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarRespuestas]
(
    -- Parametros de entrada
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	-- Logica
	SELECT C.id,
			C.titulo,
			C.cuerpo,
			C.fecha,
			C.idProfesor,
			P.nombre,
			R.idMensaje
	FROM Comentario AS C
	INNER JOIN Profesor AS P ON P.id = C.idProfesor
	INNER JOIN Respuesta AS R ON R.id = C.id
	

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[BuscarUsuarioCorreo]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BuscarUsuarioCorreo]
(
    -- Parametros de entrada
	@correo VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1,
			@idTipo INT,
			@idUsuario INT,
			@tipo INT = 0,
			@sede VARCHAR(128),
			@sede2 VARCHAR(128);

	-- Logica
	SELECT @idTipo = U.idTipo,
			@idUsuario = U.id
	FROM Usuario AS U
	WHERE U.correo = @correo
	AND U.idEstado = @ACTIVO

	IF @idTipo = 1
	BEGIN
		SELECT @tipo = P.idTipo,
				@sede2 = S.nombre
		FROM Profesor AS P
		INNER JOIN Sede AS S ON S.id = P.idSede
		WHERE P.id = @idUsuario
	END
	ELSE IF @idTipo = 3
	BEGIN
		SET @tipo = 3;
		SELECT @sede2 = S.nombre
		FROM Estudiante AS A
		INNER JOIN Sede AS S ON S.id = A.idSede
		WHERE A.id = @idUsuario
	END
	ELSE
	BEGIN
		SELECT @sede2 = S.nombre
		FROM Asistente AS A
		INNER JOIN Sede AS S ON S.id = A.idSede
		WHERE A.id = @idUsuario
	END


	SELECT U.id,
			U.correo,
			U.contrasenna,
			CASE
				WHEN @tipo=1 THEN 3
				WHEN @tipo=2 THEN 4
				WHEN @tipo=3 THEN 5
				WHEN (@sede2='Cartago' AND @tipo=0) THEN 1
				ELSE 2
			END AS tipo,
			@sede2 AS sede
	FROM Usuario AS U
	INNER JOIN TipoUsuario AS TU ON TU.id = U.idTipo
	WHERE U.correo = @correo
	AND U.idEstado = @ACTIVO;

	END TRY
	-- Captura de errores 
	BEGIN CATCH 
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[CrearActividad]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CrearActividad]
(
    -- Parametros de entrada
	@semana INT,
	@fecha DATETIME,
	@previos INT,
	@publicacion DATETIME,
	@recordatorios INT,
	@enlace VARCHAR(MAX),
	@afiche VARBINARY(MAX),
	@responsables VARCHAR(1024),
	@tipo VARCHAR(128),
	@modalidad VARCHAR(128),
	@idPlan INT,
	@nombre VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @PLANEADA INT = 1,
			@idTipo INT,
			@idModalidad INT;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION crearActividad

		SELECT @idTipo = id FROM TipoActividad WHERE nombre = @tipo;
		SELECT @idModalidad = id FROM Modalidad WHERE nombre = @modalidad;

		INSERT Actividad (
			nombre,
			semana,
			fecha,
			previos,
			fechaPublicacion,
			recordatorios,
			enlace,
			afiche,
			idTipo,
			idModalidad,
			idEstado,
			idPlan,
			responsables)
		VALUES (
			@nombre,
			@semana,
			@fecha,
			@previos,
			@publicacion,
			@recordatorios,
			@enlace,
			@afiche,
			@idTipo,
			@idModalidad,
			@PLANEADA,
			@idPlan,
			@responsables)

	COMMIT TRANSACTION crearActividad;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION crearActividad;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[CrearComentario]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CrearComentario]
(
    -- Parametros de entrada
	@idProfesor INT,
	@idActividad INT,
	@idRespuesta INT,
	@titulo VARCHAR(128),
	@cuerpo VARCHAR(1024),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1,
			@idMensaje INT;

	-- Logica
	BEGIN TRANSACTION crearMensaje

		INSERT Comentario (
			titulo,
			cuerpo,
			fecha,
			idProfesor,
			idActividad)
		VALUES(
			@titulo,
			@cuerpo,
			GETDATE(),
			@idProfesor,
			@idActividad
		);

		
		--Si hay respuesta la agregamos
		IF NOT (@idRespuesta = 0) 
		BEGIN
			--Buscamos el id del ultimo mensaje
			SELECT @idMensaje = MAX(id) FROM Comentario;
			INSERT Respuesta (
				id,
				idMensaje)
			VALUES(
				@idMensaje,
				@idRespuesta
			);
		END;

	COMMIT TRANSACTION crearMensaje

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION crearMensaje;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[CrearEquipo]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CrearEquipo]
(
    -- Parametros de entrada
	@generacion VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION crearEquipo
		
		INSERT INTO EquipoGuia (
			generacion,
			idEstado)
		VALUES(
			@generacion,
			@ACTIVO)

	COMMIT TRANSACTION crearEquipo;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION crearEquipo;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[CrearEquipoProfesor]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CrearEquipoProfesor]
(
    -- Parametros de entrada
	@id INT,
	@idProfesor INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	---Logica
	IF EXISTS (SELECT 1 FROM EquipoProfesor AS EP
		WHERE EP.idEstado = @ACTIVO
		AND  EP.idProfesor = @idProfesor
		AND EP.idEquipo = @id)
	BEGIN
		SET @outCodeResult = 50000;
		RETURN;
	END;


	--Iniciamos la transaccion
	BEGIN TRANSACTION crearEquipoProfesor
		
		INSERT INTO EquipoProfesor(
			idEquipo,
			idProfesor,
			idEstado)
		VALUES(
			@id,
			@idProfesor,
			@ACTIVO)

	COMMIT TRANSACTION crearEquipoProfesor;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION crearEquipoProfesor;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[CrearEstudiante]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CrearEstudiante]
(
    -- Parametros de entrada
	@idEquipo INT,
	@carnet VARCHAR(128),
	@correo VARCHAR(128),
	@nombre VARCHAR(128),
	@apellido1 VARCHAR(128),
	@apellido2 VARCHAR(128),
	@telefono VARCHAR(128),
	@sede VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1,
			@idSede INT,
			@idUsuario INT,
			@idEstudiante INT,
			@ESTUDIANTE INT = 3;

	---Logica

	--Iniciamos la transaccion
	BEGIN TRANSACTION crearEstudiante
		INSERT Usuario (
			correo,
			contrasenna,
			idTipo,
			idEstado)
		VALUES(
			@correo,
			@carnet,
			@ESTUDIANTE,
			@ACTIVO
		)

		SELECT @idUsuario = MAX(id) FROM Usuario;
		SELECT @idSede = id FROM Sede WHERE nombre = @sede;

		INSERT Estudiante (
			carnet,
			nombre,
			apellido1,
			apellido2,
			correo,
			telefono,
			idSede,
			idEstado,
			idEquipo)
		VALUES(
			@carnet,
			@nombre,
			@apellido1,
			@apellido1,
			@correo,
			@telefono,
			@idSede,
			@ACTIVO,
			@idEquipo)

		SELECT @idEstudiante = MAX(id) FROM Estudiante;

		INSERT EstudianteUsuario (
			id,
			idEstudiante)
		VALUES(
			@idUsuario,
			@idEstudiante
			)

	COMMIT TRANSACTION crearEstudiante;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION crearEstudiante;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[CrearNotificacion]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CrearNotificacion]
(
    -- Parametros de entrada
	@idActividad INT,
	@creacion DATETIME,
	@emisor VARCHAR(128),
	@contenido VARCHAR(512),
	@recordatorio DATETIME,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @PLANEADA INT = 1,
			@ACTIVO INT = 1,
			@currentId INT,
			@maxId INT,
			@idNotificacion INT;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION crearNotificacion

		SELECT @currentId = MIN(id) FROM EstudianteUsuario;
		SELECT @maxId = MAX(id) FROM EstudianteUsuario;

		-- Bucle para iterar sobre todas las filas de la tabla
		WHILE @currentId <= @maxId
		BEGIN
			
			INSERT INTO Notificacion(
				idEstudianteUsuario,
				idActividad,
				creacion,
				emisor,
				contenido,
				idEstado,
				visto)
			VALUES(
				@currentId,
				@idActividad,
				@creacion,
				@emisor,
				@contenido,
				@ACTIVO,
				@ACTIVO)

			IF @recordatorio IS NOT NULL
			BEGIN
				SELECT @idNotificacion = MAX(id) FROM Notificacion;
				INSERT INTO Recordatorio(
					id,
					fechaRecordatorio)
				VALUES(
					@idNotificacion,
					@recordatorio)
			END

			-- Incrementa @currentId para pasar al siguiente registro
			SELECT @currentId = MIN(id) 
			FROM EstudianteUsuario 
			WHERE id > @currentId;
		END

	COMMIT TRANSACTION crearNotificacion;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION crearNotificacion;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[CrearPlan]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CrearPlan]
(
    -- Parametros de entrada
	@id INT,
	@nombre VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION crearPlan
		
		INSERT INTO [dbo].[Plan] (
			nombre,
			idEquipo,
			idEstado)
		VALUES(
			@nombre,
			@id,
			@ACTIVO)

	COMMIT TRANSACTION crearPlan;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION crearPlan;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[CrearProfesor]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CrearProfesor]
(
    -- Parametros de entrada
	@correo VARCHAR(128),
	@contra VARCHAR(128),
	@nombre VARCHAR(128),
	@apellidos VARCHAR(128),
	@oficina VARCHAR(128),
	@personal VARCHAR(128),
	@sede VARCHAR(128),
	@codigo VARCHAR(128),
	@foto VARBINARY(MAX),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1,
			@GUIA INT = 1,
			@PROFESOR INT = 1,
			@idUsuario INT,
			@idSede INT,
			@cantidadCodigo INT = 0;

	---Logica
	--Validamos que no exista otro correo
    IF EXISTS (SELECT 1 FROM Usuario AS U
		WHERE U.correo = @correo
		AND  U.idEstado = @ACTIVO)
	BEGIN
		SET @outCodeResult = 50000;
		RETURN;
	END;

	--Iniciamos la transaccion
	BEGIN TRANSACTION crearProfesor
		INSERT Usuario (
			correo,
			contrasenna,
			idTipo,
			idEstado)
		VALUES(
			@correo,
			@contra,
			@PROFESOR,
			@ACTIVO
		);

		SELECT @idUsuario = MAX(id) FROM Usuario;
		SELECT @idSede = id FROM Sede WHERE nombre = @sede;
		--SELECT @cantidadCodigo = COUNT(1) FROM Profesor WHERE idSede = @idSede;
		--SET @codigo = @codigo + CONVERT(VARCHAR(128), @cantidadCodigo+1)

		INSERT Profesor (
			id,
			nombre,
			apellidos,
			telOficina,
			telPersonal,
			idSede,
			idTipo,
			codigo)
		VALUES(
			@idUsuario,
			@nombre,
			@apellidos,
			@oficina,
			@personal,
			@idSede,
			@GUIA,
			@codigo)

		INSERT INTO Foto (
			foto,
			idProfesor)
		VALUES (
			@foto,
			@idUsuario)
	COMMIT TRANSACTION crearProfesor;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION crearProfesor;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[EliminarActividad]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[EliminarActividad]
(
    -- Parametros de entrada
	@id INT,
	@observacion VARCHAR(256),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @INACCTIVO INT = 2,
			@CANCELADA INT = 4;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION eliminarActividad

		UPDATE Actividad SET idEstado = @CANCELADA WHERE id = @id;

		INSERT INTO Cancelacion(
			observacion,
			fecha,
			idActividad)
		VALUES(
			@observacion,
			GETDATE(),
			@id
		);
	
	COMMIT TRANSACTION eliminarActividad;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION eliminarActividad;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[EliminarEquipo]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[EliminarEquipo]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @INACTIVO INT = 2;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION eliminarEquipo
		
		UPDATE EquipoGuia SET idEstado = @INACTIVO WHERE id = @id;

	COMMIT TRANSACTION eliminarEquipo;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION eliminarEquipo;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[EliminarEquipoProfesor]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[EliminarEquipoProfesor]
(
    -- Parametros de entrada
	@id INT,
	@idProfesor INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @INACTIVO INT = 2;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION eliminarEquipoProfesor
		
		UPDATE EquipoProfesor SET idEstado = @INACTIVO WHERE idEquipo = @id 
														AND idProfesor  = @idProfesor 

		UPDATE Profesor SET idTipo = 1 WHERE id = @idProfesor

	COMMIT TRANSACTION eliminarEquipoProfesor;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION eliminarEquipoProfesor;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[EliminarEstudiante]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[EliminarEstudiante]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @INACCTIVO INT = 2;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION eliminarEstudiante

		UPDATE Estudiante SET idEstado = @INACCTIVO WHERE id = @id;

	COMMIT TRANSACTION eliminarEstudiante;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION eliminarEstudiante;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[EliminarNotificacion]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[EliminarNotificacion]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @INACCTIVO INT = 2;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION eliminarNotificacion

		UPDATE Notificacion SET idEstado = @INACCTIVO WHERE id = @id;
	
	COMMIT TRANSACTION eliminarNotificacion;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION eliminarNotificacion;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[EliminarPan]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[EliminarPan]
(
    -- Parametros de entrada
	@id INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @INACTIVO INT = 2,
			@CANCELADA INT = 4;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION eliminarPlan
		
		UPDATE [dbo].[Plan] SET idEstado = @INACTIVO WHERE id = @id;

		UPDATE Actividad SET idEstado = @CANCELADA WHERE idPlan = @id

	COMMIT TRANSACTION eliminarPlan;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION eliminarPlan;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[EliminarProfesor]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[EliminarProfesor]
(
    -- Parametros de entrada
	@idAsistente INT,
	@idProfesor INT,
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @INACCTIVO INT = 2,
			@datos VARCHAR(128) = 'Eliminar';

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION eliminarProfesor

		UPDATE Usuario SET idEstado = @INACCTIVO WHERE id = @idProfesor;

		UPDATE Responsable SET idEstado = @INACCTIVO WHERE id = @idProfesor;

		UPDATE EquipoProfesor SET idEstado = @INACCTIVO WHERE id = @idProfesor;

		INSERT INTO HistorialModificacion (
			idAsistente,
			idProfesor,
			datos,
			fecha)
		VALUES(
			@idAsistente,
			@idProfesor,
			@datos,
			GETDATE()
		);
	
	COMMIT TRANSACTION eliminarProfesor;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION eliminarProfesor;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[FinalizarActividad]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[FinalizarActividad]
(
    -- Parametros de entrada
	@id INT,
	@dato VARBINARY(MAX),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @INACCTIVO INT = 2,
			@FINALIZADA INT = 3;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION finalizarActividad

		UPDATE Actividad SET idEstado = @FINALIZADA WHERE id = @id;

		INSERT INTO Evidencia(
			dato,
			idActividad)
		VALUES(
			@dato,
			@id
		);
	
	COMMIT TRANSACTION finalizarActividad;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION finalizarActividad;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[MarcarNotificacion]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[MarcarNotificacion]
(
    -- Parametros de entrada
    @id INT,
    @outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
    BEGIN TRY
        SET @outCodeResult = 1;

        ---Logica
        --Iniciamos la transaccion
        BEGIN TRANSACTION marcarNotificacion

            UPDATE Notificacion
            SET visto = CASE 
                            WHEN visto = 1 THEN 2
                            WHEN visto = 2 THEN 1
                        END
            WHERE id = @id;
        
        COMMIT TRANSACTION marcarNotificacion;

    END TRY
    -- Captura de errores 
    BEGIN CATCH
        IF @@TRANCOUNT > 0
        BEGIN
            ROLLBACK TRANSACTION marcarNotificacion;
        END
        INSERT INTO [dbo].[RegistroErrores]
        VALUES(
                SUSER_NAME(),
                ERROR_NUMBER(),
                ERROR_MESSAGE(),
                ERROR_STATE(),
                ERROR_SEVERITY(),
                ERROR_LINE(),
                GETDATE(),
                ERROR_PROCEDURE()  
        );
        SET @outCodeResult = 50000;
    END CATCH;
    SET NOCOUNT OFF;
END;
GO
/****** Object:  StoredProcedure [dbo].[ModificarActividad]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ModificarActividad]
(
    -- Parametros de entrada
	@id INT,
	@semana INT,
	@fecha DATETIME,
	@previos INT,
	@publicacion DATETIME,
	@recordatorios INT,
	@enlace VARCHAR(MAX),
	/*@afiche VARBINARY(MAX),*/
	@responsables VARCHAR(1024),
	@tipo VARCHAR(128),
	@modalidad VARCHAR(128),
	@nombre VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @idTipo INT,
			@idModalidad INT;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION modificarActividad

		SELECT @idTipo = id FROM TipoActividad WHERE nombre = @tipo;
		SELECT @idModalidad = id FROM Modalidad WHERE nombre = @modalidad;

		UPDATE Actividad SET semana = @semana,
								fecha = @fecha,
								previos = @previos,
								fechaPublicacion = @publicacion,
								recordatorios = @recordatorios,
								enlace = @enlace,
								/*afiche = @afiche,*/
								idTipo = @idTipo,
								idModalidad = @idModalidad,
								responsables = @responsables,
								nombre = @nombre
							WHERE id = @id;

	COMMIT TRANSACTION modificarActividad;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION modificarActividad;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[ModificarEquipo]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ModificarEquipo]
(
    -- Parametros de entrada
	@id INT,
	@generacion VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION modificarEquipo
		
		UPDATE EquipoGuia SET generacion = @generacion WHERE id = @id;

	COMMIT TRANSACTION modificarEquipo;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION modificarEquipo;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[ModificarEstadoActividad]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ModificarEstadoActividad]
(
    -- Parametros de entrada
	@id INT,
	@estado VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @idEstado INT;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION modificarEstadoActividad

		SELECT @idEstado = id FROM EstadoActividad WHERE nombre = @estado;

		UPDATE Actividad SET idEstado = @idEstado
							WHERE id = @id;

	COMMIT TRANSACTION modificarEstadoActividad;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION modificarEstadoActividad;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[ModificarEstudiante]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ModificarEstudiante]
(
    -- Parametros de entrada
	@id INT,
	@carnet VARCHAR(128),
	@correo VARCHAR(128),
	@nombre VARCHAR(128),
	@apellido1 VARCHAR(128),
	@apellido2 VARCHAR(128),
	@telefono VARCHAR(128),
	@sede VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1,
			@idSede INT;

	---Logica


	--Iniciamos la transaccion
	BEGIN TRANSACTION modificarEstudiante

		SELECT @idSede = id FROM Sede WHERE nombre = @sede;

		UPDATE Estudiante SET carnet = @carnet,
								nombre = @nombre,
								apellido1 = @apellido1,
								apellido2 = @apellido2,
								correo = @correo,
								telefono = @telefono,
								idSede = @idSede
							WHERE id = @id;

	COMMIT TRANSACTION modificarEstudiante;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION modificarEstudiante;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[ModificarEstudianteFoto]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ModificarEstudianteFoto]
(
    -- Parametros de entrada
	@id INT,
	@foto VARBINARY(MAX),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1,
			@idSede INT;

	---Logica


	--Iniciamos la transaccion
	BEGIN TRANSACTION modificarEstudianteFoto

		UPDATE Estudiante SET foto = @foto
							WHERE id = @id;

	COMMIT TRANSACTION modificarEstudianteFoto;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION modificarEstudianteFoto;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[ModificarPlan]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ModificarPlan]
(
    -- Parametros de entrada
	@id INT,
	@nombre VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	---Logica
	--Iniciamos la transaccion
	BEGIN TRANSACTION modificarPlan
		
		UPDATE [dbo].[Plan] SET nombre = @nombre WHERE id = @id;

	COMMIT TRANSACTION modificarPlan;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION modificarPlan;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[ModificarProfesor]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ModificarProfesor]
(
    -- Parametros de entrada
	@idAsistente INT,
	@idProfesor INT,
	@correo VARCHAR(128),
	@contra VARCHAR(128),
	@nombre VARCHAR(128),
	@apellidos VARCHAR(128),
	@oficina VARCHAR(128),
	@personal VARCHAR(128),
	@sede VARCHAR(128),/*
	@foto VARBINARY(MAX),*/
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1,
			@idSede INT,
			@datos VARCHAR(128) = 'Modificar';

	---Logica
	--Validamos que no exista otro correo


	--Iniciamos la transaccion
	BEGIN TRANSACTION modificarProfesor

		UPDATE Usuario SET correo = @correo,
							contrasenna = @contra
						WHERE id = @idProfesor;

		SELECT @idSede = id FROM Sede WHERE nombre = @sede;

		UPDATE Profesor SET nombre = @nombre,
							apellidos = @apellidos,
							telOficina = @oficina,
							telPersonal = @personal,
							idSede = @idSede
						WHERE id = @idProfesor;

		INSERT INTO HistorialModificacion (
			idAsistente,
			idProfesor,
			datos,
			fecha)
		VALUES(
			@idAsistente,
			@idProfesor,
			@datos,
			GETDATE()
		);
	
	COMMIT TRANSACTION modificarProfesor;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION modificarProfesor;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[ModificarRolProfesor]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ModificarRolProfesor]
(
    -- Parametros de entrada
	@idAsistnete INT,
	@idEquipo INT,
	@idProfesor INT,
	@rol VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1,
			@COORDINADOR INT = 2,
			@idTipo INT,
			@datos VARCHAR(128) = 'Modificar rol';

	---Logica
	SELECT @idTipo = id FROM TipoProfesor WHERE nombre = @rol;

	IF EXISTS (SELECT 1 FROM Profesor AS P
		INNER JOIN EquipoProfesor AS EP ON EP.idProfesor = P.id
		INNER JOIN Usuario AS U ON U.id = P.id
		WHERE P.id = @idProfesor
		AND EP.idEquipo = @idEquipo 
		AND	(P.idTipo = @COORDINADOR AND @idTipo = @COORDINADOR)
		AND  U.idEstado = @ACTIVO)
	BEGIN
		SET @outCodeResult = 50000;
		RETURN;
	END;
	--Iniciamos la transaccion
	BEGIN TRANSACTION eliminarProfesor

		UPDATE Profesor SET idTipo = @idTipo WHERE id = @idProfesor;

		INSERT INTO HistorialModificacion (
			idAsistente,
			idProfesor,
			datos,
			fecha)
		VALUES(
			@idAsistnete,
			@idProfesor,
			@datos,
			GETDATE()
		);
	
	COMMIT TRANSACTION eliminarProfesor;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION eliminarProfesor;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
/****** Object:  StoredProcedure [dbo].[ModificarUsuario]    Script Date: 22/6/2024 09:32:06 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ModificarUsuario]
(
    -- Parametros de entrada
	@correo VARCHAR(128),
	@contra VARCHAR(128),
	@outCodeResult INT OUTPUT
)
AS
BEGIN
    -- Parametros iniciales
    SET NOCOUNT ON;
	BEGIN TRY
	SET  @outCodeResult = 1;

	-- Declaraciones
	DECLARE @ACTIVO INT = 1;

	---Logica

	--Iniciamos la transaccion
	BEGIN TRANSACTION modificarUsuario

		UPDATE Usuario SET contrasenna = @contra
						WHERE correo = @correo
						AND idEstado = @ACTIVO;
	
	COMMIT TRANSACTION modificarUsuario;

	END TRY
	-- Captura de errores 
	BEGIN CATCH
		IF @@TRANCOUNT>0
		BEGIN
			ROLLBACK TRANSACTION modificarUsuario;
		END
		INSERT INTO [dbo].[RegistroErrores]
		VALUES(
				SUSER_NAME(),
				ERROR_NUMBER(),
				ERROR_MESSAGE(),
				ERROR_STATE(),
				ERROR_SEVERITY(),
				ERROR_LINE(),
				GETDATE(),
				ERROR_PROCEDURE()	
		);
		SET @outCodeResult=50000;
	END CATCH;
	SET NOCOUNT OFF;
END
GO
ALTER DATABASE [ProyectoDSG5] SET  READ_WRITE 
GO
