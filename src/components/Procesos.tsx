import React from 'react';
import { Plus, Play, Pause, CheckCircle, Clock } from 'lucide-react';

const Procesos = () => {
  const procesos = [
    {
      id: 1,
      nombre: 'Proceso de Registro',
      cliente: 'ABC Corporation',
      estado: 'En Proceso',
      progreso: 75,
      fechaInicio: '2024-02-15',
      fechaEstimada: '2024-02-20'
    },
    {
      id: 2,
      nombre: 'Actualización de Datos',
      cliente: 'XYZ Limited',
      estado: 'Pendiente',
      progreso: 0,
      fechaInicio: '2024-02-18',
      fechaEstimada: '2024-02-25'
    },
    {
      id: 3,
      nombre: 'Revisión de Documentación',
      cliente: 'DEF Industries',
      estado: 'Completado',
      progreso: 100,
      fechaInicio: '2024-02-10',
      fechaEstimada: '2024-02-15'
    },
    {
      id: 4,
      nombre: 'Validación de Información',
      cliente: 'GHI Solutions',
      estado: 'En Proceso',
      progreso: 45,
      fechaInicio: '2024-02-12',
      fechaEstimada: '2024-02-22'
    }
  ];

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'En Proceso':
        return <Play className="w-4 h-4 text-blue-500" />;
      case 'Pendiente':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Completado':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Pause className="w-4 h-4 text-gray-500" />;
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'En Proceso':
        return 'bg-blue-100 text-blue-800';
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completado':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Procesos</h1>
          <p className="text-gray-600 mt-2">Gestión de procesos del sistema</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Proceso
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {procesos.map((proceso) => (
          <div key={proceso.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{proceso.nombre}</h3>
                <p className="text-sm text-gray-600">{proceso.cliente}</p>
              </div>
              <div className="flex items-center">
                {getEstadoIcon(proceso.estado)}
                <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${getEstadoColor(proceso.estado)}`}>
                  {proceso.estado}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progreso</span>
                <span>{proceso.progreso}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${proceso.progreso}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Fecha Inicio:</span>
                <span className="text-gray-900">{proceso.fechaInicio}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fecha Estimada:</span>
                <span className="text-gray-900">{proceso.fechaEstimada}</span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors">
                Ver Detalles
              </button>
              <button className="flex-1 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Procesos;
