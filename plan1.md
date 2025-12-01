# Plan de Migración: React Router → TanStack Router (File-Based)

## 📊 Análisis del Estado Actual

### Estructura Actual
```
Client/src/
├── Pages/                          # Componentes de página (.jsx)
│   ├── LoginPage.jsx
│   ├── ForgotPasswordPage.jsx
│   ├── RecuperarPassword.jsx
│   ├── Menu.jsx
│   ├── AddEstudiantesPage.jsx
│   ├── Estudiantes/
│   │   ├── EstudiantesPage.jsx
│   │   └── Hooks/
│   │       └── useEstudiantes.tsx
│   ├── DetallesEstudiante.jsx
│   ├── ModificarEstudiante.jsx
│   ├── CambiarContrasennaE.jsx
│   ├── EquipoGuiaAssistentPage.jsx
│   ├── MostrarProfesorSede.jsx
│   ├── ModificarProfesor.jsx
│   ├── RegistrarProfesor.jsx
│   ├── PlanTrabajoPage.jsx
│   ├── ActividadPage.jsx
│   ├── AddActividad.jsx
│   ├── DetallesActividad.jsx
│   ├── Comentarios.jsx
│   ├── Calendario.jsx
│   ├── Buzon.jsx
│   ├── ProximaActividad.jsx
│   └── NotFound.jsx
│
├── Features/                       # Lógica de negocio (parcial)
│   ├── Students/
│   └── Teachers/
│
├── components/                     # Componentes compartidos
│   ├── NavBar.jsx
│   ├── ErrorMessage.jsx
│   ├── Popup.jsx
│   ├── PopUpArchivo.jsx
│   └── ui/
│
├── store/                         # Zustand stores
│   └── auth.ts                   # ✅ Ya existe y funciona
│
├── lib/
│   └── queryClient.ts            # ✅ Ya configurado
│
├── routes/                        # TanStack Router (parcial)
│   ├── __root.tsx                # ⚠️ Básico, necesita actualización
│   ├── index.tsx
│   ├── about.tsx
│   ├── login.tsx
│   ├── recover-password.tsx
│   └── App.tsx                   # ❌ Mezcla React Router + TanStack
│
├── PageRoutes.jsx                 # ❌ React Router - A ELIMINAR
└── main.tsx                       # ✅ Ya usa TanStack Router
```

### Rutas Actuales (React Router)
```jsx
// PageRoutes.jsx - 21 rutas
/ → LoginPage
/forgot-password → ForgotPasswordPage
/reset-password → RecuperarPassword
/menu → Menu
/agregar-estudiantes → AddEstudiantesPage
/estudiantes → EstudiantesPage
/equipo-guia → EquipoGuiaAssistentPage
/plan-trabajo → PlanTrabajoPage
/mostrar-profesor/:id → MostrarProfesorSede
/detalle-actividad/:id → DetallesActividad
/detalle-estudiantes/:id → DetallesEstudiante
/actividad/:id → ActividadPage
/comentarios/:id → Comentarios
/modificar-estudiante/:id → ModificarEstudiante
/modificar-profesor/:id → ModificarProfesor
/registrar-profesor → RegistrarProfesor
/calendario → Calendario
/buzon → Buzon
/add-actividad → AddActividad
/proxima-actividad → ProximaActividad
/cambiar-contrasenna-e/:id → CambiarContrasennaE
```

---

## 🎯 Estructura Objetivo (File-Based Routing)

```
Client/src/
├── routes/                                  # ✅ NUEVA - Solo definiciones de rutas
│   ├── __root.tsx                          # Root layout con QueryClientProvider
│   ├── index.tsx                           # / → LoginPage
│   │
│   ├── _auth/                              # Layout para rutas públicas (sin NavBar)
│   │   ├── route.tsx                       # Layout sin NavBar
│   │   ├── forgot-password.tsx             # /forgot-password
│   │   └── reset-password.tsx              # /reset-password
│   │
│   └── _app/                               # Layout para rutas autenticadas (con NavBar)
│       ├── route.tsx                       # Layout con NavBar + auth guards
│       ├── menu.tsx                        # /menu
│       ├── calendario.tsx                  # /calendario
│       ├── buzon.tsx                       # /buzon
│       ├── proxima-actividad.tsx           # /proxima-actividad
│       │
│       ├── estudiantes/
│       │   ├── index.tsx                   # /estudiantes → EstudiantesListPage
│       │   ├── agregar.tsx                 # /estudiantes/agregar
│       │   └── $id/
│       │       ├── index.tsx               # /estudiantes/:id → DetalleEstudiantePage
│       │       ├── modificar.tsx           # /estudiantes/:id/modificar
│       │       └── cambiar-contrasenna.tsx # /estudiantes/:id/cambiar-contrasenna
│       │
│       ├── profesores/
│       │   ├── index.tsx                   # /profesores → EquipoGuiaPage
│       │   ├── registrar.tsx               # /profesores/registrar
│       │   └── $id/
│       │       ├── index.tsx               # /profesores/:id → DetalleProfesorPage
│       │       └── modificar.tsx           # /profesores/:id/modificar
│       │
│       └── plan-trabajo/
│           ├── index.tsx                   # /plan-trabajo → PlanTrabajoListPage
│           └── $idPlan/
│               └── actividades/
│                   ├── index.tsx           # /plan-trabajo/:idPlan/actividades
│                   ├── crear.tsx           # /plan-trabajo/:idPlan/actividades/crear
│                   └── $id/
│                       ├── index.tsx       # /plan-trabajo/:idPlan/actividades/:id
│                       └── comentarios.tsx # /plan-trabajo/:idPlan/actividades/:id/comentarios
│
├── pages/                                   # ✅ NUEVA - Componentes de página (UI pura)
│   ├── LoginPage.tsx
│   ├── ForgotPasswordPage.tsx
│   ├── ResetPasswordPage.tsx
│   ├── MenuPage.tsx
│   ├── CalendarioPage.tsx
│   ├── BuzonPage.tsx
│   ├── ProximaActividadPage.tsx
│   │
│   ├── estudiantes/
│   │   ├── EstudiantesListPage.tsx
│   │   ├── AgregarEstudiantesPage.tsx
│   │   ├── DetalleEstudiantePage.tsx
│   │   ├── ModificarEstudiantePage.tsx
│   │   └── CambiarContrasennaPage.tsx
│   │
│   ├── profesores/
│   │   ├── EquipoGuiaPage.tsx
│   │   ├── RegistrarProfesorPage.tsx
│   │   ├── DetalleProfesorPage.tsx
│   │   └── ModificarProfesorPage.tsx
│   │
│   └── plan-trabajo/
│       ├── PlanTrabajoListPage.tsx
│       ├── ActividadesListPage.tsx
│       ├── CrearActividadPage.tsx
│       ├── DetalleActividadPage.tsx
│       └── ComentariosPage.tsx
│
├── features/                                # ✅ REORGANIZAR - Lógica de negocio
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── stores/
│   │   │   └── useAuthStore.ts            # ✅ Ya existe
│   │   ├── queries/
│   │   │   ├── useLoginMutation.ts
│   │   │   └── useLogoutMutation.ts
│   │   └── services/
│   │       └── authService.ts
│   │
│   ├── estudiantes/
│   │   ├── components/
│   │   │   ├── EstudianteCard.tsx
│   │   │   ├── EstudianteForm.tsx
│   │   │   └── EstudiantesTable.tsx
│   │   ├── hooks/
│   │   │   └── useEstudianteFilters.ts
│   │   ├── stores/
│   │   ├── queries/
│   │   │   ├── useEstudiantes.ts          # Mover de Pages/Estudiantes/Hooks
│   │   │   ├── useEstudiante.ts
│   │   │   ├── useCreateEstudiante.ts
│   │   │   └── useUpdateEstudiante.ts
│   │   └── services/
│   │       └── estudiantesService.ts
│   │
│   ├── profesores/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── stores/
│   │   ├── queries/
│   │   └── services/
│   │
│   ├── actividades/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── stores/
│   │   ├── queries/
│   │   └── services/
│   │
│   └── plan-trabajo/
│       ├── components/
│       ├── hooks/
│       ├── stores/
│       ├── queries/
│       └── services/
│
├── shared/                                  # ✅ REORGANIZAR - Código compartido
│   ├── components/
│   │   ├── ui/                             # Componentes base
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Card.tsx
│   │   ├── layout/
│   │   │   ├── NavBar.tsx                  # Mover de /components
│   │   │   └── PageLayout.tsx
│   │   └── modals/                         # Popups genéricos
│   │       ├── ConfirmDialog.tsx
│   │       ├── Modal.tsx
│   │       ├── PopupArchivo.tsx            # Mover de /components
│   │       └── PopupCancelar.tsx           # Mover de /components
│   │
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   └── useToggle.ts
│   │
│   ├── lib/
│   │   ├── queryClient.ts                  # ✅ Ya existe
│   │   └── axios.ts
│   │
│   ├── types/
│   │   ├── api.types.ts
│   │   └── common.types.ts
│   │
│   └── utils/
│       ├── formatters.ts
│       └── validators.ts
│
└── config/
    ├── apiRoutes.ts
    └── constants.ts
```

---

## 🗺️ Mapeo de Rutas: Antes → Después

| Ruta Actual (React Router)        | Nueva Ruta (TanStack)                    | Archivo Route                                    | Archivo Page                              |
|------------------------------------|------------------------------------------|--------------------------------------------------|-------------------------------------------|
| `/`                                | `/`                                      | `routes/index.tsx`                               | `pages/LoginPage.tsx`                     |
| `/forgot-password`                 | `/forgot-password`                       | `routes/_auth/forgot-password.tsx`               | `pages/ForgotPasswordPage.tsx`            |
| `/reset-password`                  | `/reset-password`                        | `routes/_auth/reset-password.tsx`                | `pages/ResetPasswordPage.tsx`             |
| `/menu`                            | `/menu`                                  | `routes/_app/menu.tsx`                           | `pages/MenuPage.tsx`                      |
| `/calendario`                      | `/calendario`                            | `routes/_app/calendario.tsx`                     | `pages/CalendarioPage.tsx`                |
| `/buzon`                           | `/buzon`                                 | `routes/_app/buzon.tsx`                          | `pages/BuzonPage.tsx`                     |
| `/proxima-actividad`               | `/proxima-actividad`                     | `routes/_app/proxima-actividad.tsx`              | `pages/ProximaActividadPage.tsx`          |
| `/estudiantes`                     | `/estudiantes`                           | `routes/_app/estudiantes/index.tsx`              | `pages/estudiantes/EstudiantesListPage.tsx`|
| `/agregar-estudiantes`             | `/estudiantes/agregar`                   | `routes/_app/estudiantes/agregar.tsx`            | `pages/estudiantes/AgregarEstudiantesPage.tsx`|
| `/detalle-estudiantes/:id`         | `/estudiantes/:id`                       | `routes/_app/estudiantes/$id/index.tsx`          | `pages/estudiantes/DetalleEstudiantePage.tsx`|
| `/modificar-estudiante/:id`        | `/estudiantes/:id/modificar`             | `routes/_app/estudiantes/$id/modificar.tsx`      | `pages/estudiantes/ModificarEstudiantePage.tsx`|
| `/cambiar-contrasenna-e/:id`       | `/estudiantes/:id/cambiar-contrasenna`   | `routes/_app/estudiantes/$id/cambiar-contrasenna.tsx`| `pages/estudiantes/CambiarContrasennaPage.tsx`|
| `/equipo-guia`                     | `/profesores`                            | `routes/_app/profesores/index.tsx`               | `pages/profesores/EquipoGuiaPage.tsx`     |
| `/registrar-profesor`              | `/profesores/registrar`                  | `routes/_app/profesores/registrar.tsx`           | `pages/profesores/RegistrarProfesorPage.tsx`|
| `/mostrar-profesor/:id`            | `/profesores/:id`                        | `routes/_app/profesores/$id/index.tsx`           | `pages/profesores/DetalleProfesorPage.tsx`|
| `/modificar-profesor/:id`          | `/profesores/:id/modificar`              | `routes/_app/profesores/$id/modificar.tsx`       | `pages/profesores/ModificarProfesorPage.tsx`|
| `/plan-trabajo`                    | `/plan-trabajo`                          | `routes/_app/plan-trabajo/index.tsx`             | `pages/plan-trabajo/PlanTrabajoListPage.tsx`|
| `/actividad/:id`                   | `/plan-trabajo/:idPlan/actividades`      | `routes/_app/plan-trabajo/$idPlan/actividades/index.tsx`| `pages/plan-trabajo/ActividadesListPage.tsx`|
| `/add-actividad`                   | `/plan-trabajo/:idPlan/actividades/crear`| `routes/_app/plan-trabajo/$idPlan/actividades/crear.tsx`| `pages/plan-trabajo/CrearActividadPage.tsx`|
| `/detalle-actividad/:id`           | `/plan-trabajo/:idPlan/actividades/:id`  | `routes/_app/plan-trabajo/$idPlan/actividades/$id/index.tsx`| `pages/plan-trabajo/DetalleActividadPage.tsx`|
| `/comentarios/:id`                 | `/plan-trabajo/:idPlan/actividades/:id/comentarios`| `routes/_app/plan-trabajo/$idPlan/actividades/$id/comentarios.tsx`| `pages/plan-trabajo/ComentariosPage.tsx`|

---

## 📋 Plan de Acción - Fases

### ✅ Fase 1: Preparación y Setup
**Objetivo:** Configurar la base para file-based routing

- [ ] **1.1** Instalar dependencias necesarias
  ```bash
  npm install @tanstack/react-router@latest
  npm install -D @tanstack/router-devtools @tanstack/router-vite-plugin
  ```

- [ ] **1.2** Actualizar `vite.config.ts` para generar rutas automáticamente
  ```typescript
  import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

  export default defineConfig({
    plugins: [react(), TanStackRouterVite()],
  })
  ```

- [ ] **1.3** Crear estructura de carpetas
  ```bash
  mkdir -p src/pages/{estudiantes,profesores,plan-trabajo}
  mkdir -p src/features/{auth,estudiantes,profesores,actividades,plan-trabajo}/{components,hooks,stores,queries,services}
  mkdir -p src/shared/{components/{ui,layout,modals},hooks,lib,types,utils}
  mkdir -p src/config
  ```

---

### ✅ Fase 2: Actualizar Root y Layouts
**Objetivo:** Crear layouts base con providers correctos

- [ ] **2.1** Actualizar `routes/__root.tsx`
  - Agregar `QueryClientProvider`
  - Configurar `Outlet` para children
  - Agregar TanStack Router Devtools (solo dev)

- [ ] **2.2** Crear `routes/_auth/route.tsx` (Layout público)
  - Sin NavBar
  - Sin autenticación requerida
  - Solo `<Outlet />`

- [ ] **2.3** Crear `routes/_app/route.tsx` (Layout autenticado)
  - Incluir `<NavBar />` de `shared/components/layout`
  - Agregar guards de autenticación usando `beforeLoad`
  - Outlet para children

---

### ✅ Fase 3: Migrar Páginas a /pages (Renombrar y Mover)
**Objetivo:** Convertir archivos .jsx a .tsx y reorganizar

#### 3.1 Páginas de Autenticación
- [ ] `Pages/LoginPage.jsx` → `pages/LoginPage.tsx`
- [ ] `Pages/ForgotPasswordPage.jsx` → `pages/ForgotPasswordPage.tsx`
- [ ] `Pages/RecuperarPassword.jsx` → `pages/ResetPasswordPage.tsx`

#### 3.2 Páginas Generales
- [ ] `Pages/Menu.jsx` → `pages/MenuPage.tsx`
- [ ] `Pages/Calendario.jsx` → `pages/CalendarioPage.tsx`
- [ ] `Pages/Buzon.jsx` → `pages/BuzonPage.tsx`
- [ ] `Pages/ProximaActividad.jsx` → `pages/ProximaActividadPage.tsx`

#### 3.3 Páginas de Estudiantes
- [ ] `Pages/Estudiantes/EstudiantesPage.jsx` → `pages/estudiantes/EstudiantesListPage.tsx`
- [ ] `Pages/AddEstudiantesPage.jsx` → `pages/estudiantes/AgregarEstudiantesPage.tsx`
- [ ] `Pages/DetallesEstudiante.jsx` → `pages/estudiantes/DetalleEstudiantePage.tsx`
- [ ] `Pages/ModificarEstudiante.jsx` → `pages/estudiantes/ModificarEstudiantePage.tsx`
- [ ] `Pages/CambiarContrasennaE.jsx` → `pages/estudiantes/CambiarContrasennaPage.tsx`

#### 3.4 Páginas de Profesores
- [ ] `Pages/EquipoGuiaAssistentPage.jsx` → `pages/profesores/EquipoGuiaPage.tsx`
- [ ] `Pages/RegistrarProfesor.jsx` → `pages/profesores/RegistrarProfesorPage.tsx`
- [ ] `Pages/MostrarProfesorSede.jsx` → `pages/profesores/DetalleProfesorPage.tsx`
- [ ] `Pages/ModificarProfesor.jsx` → `pages/profesores/ModificarProfesorPage.tsx`

#### 3.5 Páginas de Plan de Trabajo y Actividades
- [ ] `Pages/PlanTrabajoPage.jsx` → `pages/plan-trabajo/PlanTrabajoListPage.tsx`
- [ ] `Pages/ActividadPage.jsx` → `pages/plan-trabajo/ActividadesListPage.tsx`
- [ ] `Pages/AddActividad.jsx` → `pages/plan-trabajo/CrearActividadPage.tsx`
- [ ] `Pages/DetallesActividad.jsx` → `pages/plan-trabajo/DetalleActividadPage.tsx`
- [ ] `Pages/Comentarios.jsx` → `pages/plan-trabajo/ComentariosPage.tsx`

**Notas para conversión:**
- Convertir PropTypes a TypeScript interfaces
- Remover imports de `react-router-dom` (useNavigate, useParams)
- Usar equivalentes de TanStack Router: `useNavigate()`, `useParams()`

---

### ✅ Fase 4: Crear Rutas File-Based
**Objetivo:** Crear archivos de ruta que consuman las páginas

#### 4.1 Rutas Raíz y Autenticación
- [ ] `routes/index.tsx` → Importar `LoginPage`
- [ ] `routes/_auth/forgot-password.tsx` → Importar `ForgotPasswordPage`
- [ ] `routes/_auth/reset-password.tsx` → Importar `ResetPasswordPage`

#### 4.2 Rutas Generales Autenticadas
- [ ] `routes/_app/menu.tsx` → Importar `MenuPage`
- [ ] `routes/_app/calendario.tsx` → Importar `CalendarioPage`
- [ ] `routes/_app/buzon.tsx` → Importar `BuzonPage`
- [ ] `routes/_app/proxima-actividad.tsx` → Importar `ProximaActividadPage`

#### 4.3 Rutas de Estudiantes
- [ ] `routes/_app/estudiantes/index.tsx` → Importar `EstudiantesListPage`
- [ ] `routes/_app/estudiantes/agregar.tsx` → Importar `AgregarEstudiantesPage`
- [ ] `routes/_app/estudiantes/$id/index.tsx` → Importar `DetalleEstudiantePage`
- [ ] `routes/_app/estudiantes/$id/modificar.tsx` → Importar `ModificarEstudiantePage`
- [ ] `routes/_app/estudiantes/$id/cambiar-contrasenna.tsx` → Importar `CambiarContrasennaPage`

#### 4.4 Rutas de Profesores
- [ ] `routes/_app/profesores/index.tsx` → Importar `EquipoGuiaPage`
- [ ] `routes/_app/profesores/registrar.tsx` → Importar `RegistrarProfesorPage`
- [ ] `routes/_app/profesores/$id/index.tsx` → Importar `DetalleProfesorPage`
- [ ] `routes/_app/profesores/$id/modificar.tsx` → Importar `ModificarProfesorPage`

#### 4.5 Rutas de Plan de Trabajo
- [ ] `routes/_app/plan-trabajo/index.tsx` → Importar `PlanTrabajoListPage`
- [ ] `routes/_app/plan-trabajo/$idPlan/actividades/index.tsx` → Importar `ActividadesListPage`
- [ ] `routes/_app/plan-trabajo/$idPlan/actividades/crear.tsx` → Importar `CrearActividadPage`
- [ ] `routes/_app/plan-trabajo/$idPlan/actividades/$id/index.tsx` → Importar `DetalleActividadPage`
- [ ] `routes/_app/plan-trabajo/$idPlan/actividades/$id/comentarios.tsx` → Importar `ComentariosPage`

**Patrón de archivo de ruta:**
```tsx
import { createFileRoute } from '@tanstack/react-router'
import { EstudiantesListPage } from '@/pages/estudiantes/EstudiantesListPage'

export const Route = createFileRoute('/_app/estudiantes/')({
  component: EstudiantesListPage,
})
```

---

### ✅ Fase 5: Reorganizar Features
**Objetivo:** Mover lógica de negocio a carpeta features

#### 5.1 Auth Feature
- [ ] Mover `store/auth.ts` → `features/auth/stores/useAuthStore.ts`
- [ ] Crear `features/auth/services/authService.ts`
- [ ] Crear `features/auth/queries/useLoginMutation.ts`
- [ ] Crear `features/auth/queries/useLogoutMutation.ts`

#### 5.2 Estudiantes Feature
- [ ] Mover `Pages/Estudiantes/Hooks/useEstudiantes.tsx` → `features/estudiantes/queries/useEstudiantes.ts`
- [ ] Crear `features/estudiantes/services/estudiantesService.ts`
- [ ] Crear queries adicionales:
  - `useEstudiante.ts` (detalle de un estudiante)
  - `useCreateEstudiante.ts`
  - `useUpdateEstudiante.ts`
  - `useDeleteEstudiante.ts`

#### 5.3 Profesores Feature
- [ ] Crear `features/profesores/services/profesoresService.ts`
- [ ] Crear queries:
  - `useProfesores.ts`
  - `useProfesor.ts`
  - `useCreateProfesor.ts`
  - `useUpdateProfesor.ts`

#### 5.4 Plan de Trabajo Feature
- [ ] Crear `features/plan-trabajo/services/planTrabajoService.ts`
- [ ] Crear queries:
  - `usePlanes.ts`
  - `usePlan.ts`
  - `useCreatePlan.ts`

#### 5.5 Actividades Feature
- [ ] Crear `features/actividades/services/actividadesService.ts`
- [ ] Crear queries:
  - `useActividades.ts`
  - `useActividad.ts`
  - `useCreateActividad.ts`
  - `useComentarios.ts`

---

### ✅ Fase 6: Reorganizar Shared
**Objetivo:** Mover componentes compartidos y crear utilities

#### 6.1 Components Layout
- [ ] Mover `components/NavBar.jsx` → `shared/components/layout/NavBar.tsx`
- [ ] Crear `shared/components/layout/PageLayout.tsx`

#### 6.2 Components Modals
- [ ] Mover `components/Popup.jsx` → `shared/components/modals/Modal.tsx`
- [ ] Mover `components/PopUpArchivo.jsx` → `shared/components/modals/PopupArchivo.tsx`
- [ ] Mover `components/PopupCancelar.jsx` → `shared/components/modals/PopupCancelar.tsx`
- [ ] Mover otros popups a `shared/components/modals/`

#### 6.3 Components UI
- [ ] Extraer componentes reutilizables de páginas a `shared/components/ui/`
  - Button.tsx
  - Input.tsx
  - Card.tsx
  - etc.

#### 6.4 Hooks
- [ ] Crear hooks útiles:
  - `shared/hooks/useDebounce.ts`
  - `shared/hooks/useToggle.ts`
  - `shared/hooks/useLocalStorage.ts`

#### 6.5 Types
- [ ] Crear `shared/types/api.types.ts`
- [ ] Crear `shared/types/common.types.ts`

#### 6.6 Utils
- [ ] Crear `shared/utils/formatters.ts`
- [ ] Crear `shared/utils/validators.ts`

---

### ✅ Fase 7: Configuración
**Objetivo:** Centralizar constantes y configuración

- [ ] **7.1** Crear `config/apiRoutes.ts`
  - Definir todas las rutas del API
  - Exportar funciones helper para construir URLs

- [ ] **7.2** Crear `config/constants.ts`
  - Constantes de la aplicación
  - Configuraciones generales

- [ ] **7.3** Actualizar `shared/lib/axios.ts`
  - Configurar interceptors
  - Agregar manejo de errores
  - Integrar con auth store

---

### ✅ Fase 8: Limpieza
**Objetivo:** Eliminar código antiguo de React Router

- [ ] **8.1** Eliminar archivos obsoletos:
  - `src/PageRoutes.jsx`
  - `src/routes/App.tsx`
  - `src/routes/about.tsx` (si no se usa)
  - Carpeta `src/Pages/` completa (ya movida a `pages/`)
  - Carpeta `src/context/` (si AuthContext ya no se usa)

- [ ] **8.2** Actualizar imports en todo el proyecto:
  - Buscar imports de `react-router-dom` y reemplazar con TanStack Router
  - Actualizar paths de imports de componentes movidos

- [ ] **8.3** Desinstalar React Router
  ```bash
  npm uninstall react-router-dom
  ```

---

### ✅ Fase 9: Testing y Ajustes
**Objetivo:** Verificar que todo funciona correctamente

- [ ] **9.1** Probar todas las rutas manualmente:
  - [ ] Login y autenticación
  - [ ] Navegación entre páginas
  - [ ] Rutas con parámetros (estudiantes/:id, etc.)
  - [ ] Rutas anidadas (plan-trabajo/:idPlan/actividades/:id)

- [ ] **9.2** Verificar guards de autenticación:
  - [ ] Redirección a login si no autenticado
  - [ ] Acceso correcto a rutas protegidas

- [ ] **9.3** Probar navegación:
  - [ ] Links funcionan correctamente
  - [ ] Navegación programática (useNavigate)
  - [ ] Parámetros de ruta se leen correctamente

- [ ] **9.4** Verificar DevTools:
  - [ ] TanStack Router DevTools funciona
  - [ ] TanStack Query DevTools funciona

---

## 🔧 Configuración Técnica

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### tsconfig.json (paths)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/features/*": ["./src/features/*"],
      "@/shared/*": ["./src/shared/*"],
      "@/config/*": ["./src/config/*"]
    }
  }
}
```

---

## ⚠️ Consideraciones Importantes

### 1. **Autenticación con Guards**
Usar `beforeLoad` en `routes/_app/route.tsx`:
```typescript
export const Route = createFileRoute('/_app')({
  beforeLoad: ({ context }) => {
    const { getLoginStatus } = useAuthStore.getState()
    if (!getLoginStatus()) {
      throw redirect({ to: '/' })
    }
  },
  component: AppLayout,
})
```

### 2. **TanStack Query Integration**
Las páginas deben usar hooks de `features/*/queries/` en lugar de llamar servicios directamente.

### 3. **TypeScript Strict Mode**
Convertir todos los archivos .jsx a .tsx con tipos correctos.

### 4. **Path Aliases**
Usar imports absolutos:
```typescript
import { LoginPage } from '@/pages/LoginPage'
import { useEstudiantes } from '@/features/estudiantes/queries/useEstudiantes'
import { Button } from '@/shared/components/ui/Button'
```

### 5. **File Naming Conventions**
- Rutas: kebab-case (`estudiantes/agregar.tsx`)
- Componentes: PascalCase (`EstudiantesListPage.tsx`)
- Hooks: camelCase con prefijo `use` (`useEstudiantes.ts`)
- Services: camelCase con sufijo `Service` (`estudiantesService.ts`)

---

## 📦 Dependencias Finales

```json
{
  "dependencies": {
    "@tanstack/react-router": "^1.80.0",
    "@tanstack/react-query": "^5.90.11",
    "zustand": "^4.x.x",
    "axios": "^1.x.x"
  },
  "devDependencies": {
    "@tanstack/router-devtools": "^1.80.0",
    "@tanstack/router-vite-plugin": "^1.80.0"
  }
}
```

---

## ✅ Checklist de Migración Completa

- [ ] Fase 1: Preparación y Setup (3 tareas)
- [ ] Fase 2: Actualizar Root y Layouts (3 tareas)
- [ ] Fase 3: Migrar Páginas (20 archivos)
- [ ] Fase 4: Crear Rutas File-Based (21 rutas)
- [ ] Fase 5: Reorganizar Features (5 features)
- [ ] Fase 6: Reorganizar Shared (6 sub-tareas)
- [ ] Fase 7: Configuración (3 tareas)
- [ ] Fase 8: Limpieza (3 tareas)
- [ ] Fase 9: Testing y Ajustes (4 sub-tareas)

---

## 🎯 Resultado Final

Al completar este plan:
- ✅ 100% TanStack Router con file-based routing
- ✅ 0 dependencias de React Router
- ✅ Separación clara: routes (config) / pages (UI) / features (lógica)
- ✅ TypeScript en todos los archivos
- ✅ Estructura escalable y mantenible
- ✅ Guards de autenticación configurados
- ✅ TanStack Query integrado correctamente

---

**Tiempo estimado:** 2-3 días de trabajo (según experiencia con el proyecto)

**Orden recomendado:** Seguir las fases en orden para evitar romper la aplicación durante la migración.
