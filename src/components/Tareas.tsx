import React, { useState } from 'react';
import { Plus, CheckCircle, Circle, Trash2, Edit, Calendar, User } from 'lucide-react';

const Tareas = () => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      titulo: 'Revisar documentación del cliente ABC Corp',
      descripcion: 'Verificar que todos los documentos estén completos y correctos',
      completada: false,
      prioridad: 'Alta',
      fechaCreacion: '2024-02-15',
      fechaLimite: '2024-02-20',
      asignada: 'Juan Pérez',
      categoria: 'Revisión'
    },
    {
      id: 2,
      titulo: 'Contactar cliente XYZ Limited',
      descripcion: 'Solicitar información adicional para completar el proceso',
      completada: true,
      prioridad: 'Media',
      fechaCreacion: '2024-02-10',
      fechaLimite: '2024-02-18',
      asignada: 'María García',
      categoria: 'Contacto'
    },
    {
      id: 3,
      titulo: 'Actualizar datos en el sistema',
      descripcion: 'Sincronizar información del cliente DEF Industries',
      completada: false,
      prioridad: 'Baja',
      fechaCreacion: '2024-02-12',
      fechaLimite: '2024-02-25',
      asignada: 'Carlos López',
      categoria: 'Actualización'
    },
    {
      id: 4,
      titulo: 'Validar información de GHI Solutions',
      descripcion: 'Verificar la exactitud de los datos proporcionados',
      completada: false,
      prioridad: 'Alta',
      fechaCreacion: '2024-02-14',
      fechaLimite: '2024-02-22',
      asignada: 'Ana Rodríguez',
      categoria: 'Validación'
    }
  ]);

  const [filtro, setFiltro] = useState('todas');

  const toggleTarea = (id: number) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case 'Alta':
        return 'bg-red-100 text-red-800';
      case 'Media':
        return 'bg-yellow-100 text-yellow-800';
      case 'Baja':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'pendientes') return !tarea.completada;
    return true;
  });

  const tareasCompletadas = tareas.filter(t => t.completada).length;
  const tareasPendientes = tareas.filter(t => !t.completada).length;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tareas</h1>
          <p className="text-gray-600 mt-2">Gestión de tareas del sistema</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Nueva Tarea
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setFiltro('todas')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtro === 'todas' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todas ({tareas.length})
            </button>
            <button
              onClick={() => setFiltro('pendientes')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtro === 'pendientes' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pendientes ({tareasPendientes})
            </button>
            <button
              onClick={() => setFiltro('completadas')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtro === 'completadas' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Completadas ({tareasCompletadas})
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {tareasFiltradas.map((tarea) => (
            <div 
              key={tarea.id} 
              className={`p-4 border rounded-lg transition-all duration-200 ${
                tarea.completada 
                  ? 'bg-gray-50 border-gray-200' 
                  : 'bg-white border-gray-300 hover:border-primary-300'
              }`}
            >
              <div className="flex items-start space-x-3">
                <button
                  onClick={() => toggleTarea(tarea.id)}
                  className="mt-1"
                >
                  {tarea.completada ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400 hover:text-primary-500" />
                  )}
                </button>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={`text-lg font-medium ${
                        tarea.completada ? 'text-gray-500 line-through' : 'text-gray-900'
                      }`}>
                        {tarea.titulo}
                      </h3>
                      <p className={`text-sm mt-1 ${
                        tarea.completada ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {tarea.descripcion}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPrioridadColor(tarea.prioridad)}`}>
                        {tarea.prioridad}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Límite: {tarea.fechaLimite}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{tarea.asignada}</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                      {tarea.categoria}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumen</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Tareas:</span>
              <span className="font-semibold">{tareas.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Completadas:</span>
              <span className="font-semibold text-green-600">{tareasCompletadas}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pendientes:</span>
              <span className="font-semibold text-yellow-600">{tareasPendientes}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Progreso:</span>
              <span className="font-semibold text-primary-600">
                {Math.round((tareasCompletadas / tareas.length) * 100)}%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Por Prioridad</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Alta:</span>
              <span className="font-semibold text-red-600">
                {tareas.filter(t => t.prioridad === 'Alta').length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Media:</span>
              <span className="font-semibold text-yellow-600">
                {tareas.filter(t => t.prioridad === 'Media').length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Baja:</span>
              <span className="font-semibold text-green-600">
                {tareas.filter(t => t.prioridad === 'Baja').length}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximas Fechas</h3>
          <div className="space-y-3">
            {tareas
              .filter(t => !t.completada)
              .sort((a, b) => new Date(a.fechaLimite).getTime() - new Date(b.fechaLimite).getTime())
              .slice(0, 3)
              .map(tarea => (
                <div key={tarea.id} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 truncate">{tarea.titulo}</span>
                  <span className="text-xs text-gray-500">{tarea.fechaLimite}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tareas;
