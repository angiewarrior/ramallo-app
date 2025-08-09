import React, { useState } from 'react';
import { Users, UserCheck, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Asignacion = () => {
  const [activeFilter, setActiveFilter] = useState('todas');

  const asignaciones = [
    {
      id: 1,
      cliente: 'María González',
      asesor: 'Carlos Rodríguez',
      tarea: 'Seguimiento de proceso',
      fecha: '2024-01-15',
      estado: 'pendiente',
      prioridad: 'alta'
    },
    {
      id: 2,
      cliente: 'Juan Pérez',
      asesor: 'Ana Martínez',
      tarea: 'Revisión de documentación',
      fecha: '2024-01-16',
      estado: 'en_proceso',
      prioridad: 'media'
    },
    {
      id: 3,
      cliente: 'Laura Silva',
      asesor: 'Roberto Díaz',
      tarea: 'Contacto inicial',
      fecha: '2024-01-14',
      estado: 'completada',
      prioridad: 'baja'
    },
    {
      id: 4,
      cliente: 'Pedro López',
      asesor: 'Carmen Ruiz',
      tarea: 'Análisis de requerimientos',
      fecha: '2024-01-17',
      estado: 'pendiente',
      prioridad: 'alta'
    }
  ];

  const asesores = [
    { id: 1, nombre: 'Carlos Rodríguez', especialidad: 'Procesos', carga: 8 },
    { id: 2, nombre: 'Ana Martínez', especialidad: 'Documentación', carga: 6 },
    { id: 3, nombre: 'Roberto Díaz', especialidad: 'Contacto', carga: 4 },
    { id: 4, nombre: 'Carmen Ruiz', especialidad: 'Análisis', carga: 7 }
  ];

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'completada':
        return 'bg-green-100 text-green-800';
      case 'en_proceso':
        return 'bg-blue-100 text-blue-800';
      case 'pendiente':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case 'alta':
        return 'bg-red-100 text-red-800';
      case 'media':
        return 'bg-yellow-100 text-yellow-800';
      case 'baja':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'completada':
        return <CheckCircle className="w-4 h-4" />;
      case 'en_proceso':
        return <Clock className="w-4 h-4" />;
      case 'pendiente':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const filteredAsignaciones = asignaciones.filter(asignacion => {
    if (activeFilter === 'todas') return true;
    return asignacion.estado === activeFilter;
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <UserCheck className="w-6 h-6 text-primary-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Asignación</h1>
        </div>
        <p className="text-gray-600">Gestiona la asignación de tareas y recursos</p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Asignaciones</p>
              <p className="text-2xl font-bold text-gray-900">{asignaciones.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pendientes</p>
              <p className="text-2xl font-bold text-gray-900">
                {asignaciones.filter(a => a.estado === 'pendiente').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">En Proceso</p>
              <p className="text-2xl font-bold text-gray-900">
                {asignaciones.filter(a => a.estado === 'en_proceso').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completadas</p>
              <p className="text-2xl font-bold text-gray-900">
                {asignaciones.filter(a => a.estado === 'completada').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Asignaciones */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Asignaciones</h2>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Nueva Asignación
                </button>
              </div>
              
              {/* Filtros */}
              <div className="flex space-x-2 mt-4">
                {['todas', 'pendiente', 'en_proceso', 'completada'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === filter
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1).replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Cliente</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Asesor</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Tarea</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Fecha</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Estado</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Prioridad</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAsignaciones.map((asignacion) => (
                    <tr key={asignacion.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{asignacion.cliente}</td>
                      <td className="py-3 px-4">{asignacion.asesor}</td>
                      <td className="py-3 px-4">{asignacion.tarea}</td>
                      <td className="py-3 px-4">{asignacion.fecha}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getEstadoColor(asignacion.estado)}`}>
                          {getEstadoIcon(asignacion.estado)}
                          <span className="ml-1">
                            {asignacion.estado.replace('_', ' ').charAt(0).toUpperCase() + asignacion.estado.slice(1).replace('_', ' ')}
                          </span>
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPrioridadColor(asignacion.prioridad)}`}>
                          {asignacion.prioridad.charAt(0).toUpperCase() + asignacion.prioridad.slice(1)}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-primary-600 hover:text-primary-800 mr-2">Editar</button>
                        <button className="text-red-600 hover:text-red-800">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Panel de Asesores */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Asesores Disponibles</h2>
            </div>
            
            <div className="p-6 space-y-4">
              {asesores.map((asesor) => (
                <div key={asesor.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">{asesor.nombre}</h3>
                    <span className="text-sm text-gray-500">{asesor.especialidad}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full" 
                          style={{ width: `${(asesor.carga / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">{asesor.carga}/10</span>
                  </div>
                  <div className="mt-2">
                    <button className="text-primary-600 hover:text-primary-800 text-sm">
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asignacion;
