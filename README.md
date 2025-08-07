# Ramallo App

Aplicación de gestión empresarial con interfaz moderna y funcional.

## Características

- **Dashboard**: Panel de control con estadísticas y resumen de actividades
- **Clientes**: Gestión completa de clientes con tabla de datos
- **Procesos**: Seguimiento de procesos con barras de progreso
- **Pendientes**: Lista de elementos pendientes con prioridades
- **Tareas**: Sistema de gestión de tareas con filtros y estados

## Tecnologías Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (iconos)

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm start
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Estructura del Proyecto

```
src/
├── components/
│   ├── Sidebar.tsx      # Menú lateral
│   ├── Dashboard.tsx    # Panel principal
│   ├── Clientes.tsx     # Gestión de clientes
│   ├── Procesos.tsx     # Gestión de procesos
│   ├── Pendientes.tsx   # Lista de pendientes
│   └── Tareas.tsx       # Gestión de tareas
├── App.tsx              # Componente principal
├── index.tsx            # Punto de entrada
└── index.css            # Estilos globales
```

## Funcionalidades

### Dashboard
- Estadísticas en tiempo real
- Actividad reciente
- Próximas tareas

### Clientes
- Lista de clientes con búsqueda
- Estados activo/inactivo
- Acciones de edición y eliminación

### Procesos
- Tarjetas de procesos con progreso
- Estados: En Proceso, Pendiente, Completado
- Fechas de inicio y estimadas

### Pendientes
- Lista de elementos pendientes
- Indicadores de urgencia
- Resumen por prioridad

### Tareas
- Gestión completa de tareas
- Filtros por estado
- Sistema de prioridades
- Estadísticas de progreso

## Próximos Pasos

- [ ] Implementar formularios de creación/edición
- [ ] Agregar autenticación de usuarios
- [ ] Conectar con backend/API
- [ ] Implementar notificaciones
- [ ] Agregar más funcionalidades específicas