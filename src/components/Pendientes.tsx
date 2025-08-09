import React from 'react';
import { Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const Pendientes = () => {
  const pendientes = [
    {
      id: 1,
      titulo: 'Revisar documentación de ABC Corp',
      descripcion: 'Documentos pendientes de revisión para el proceso de registro',
      prioridad: 'Alta',
      fechaLimite: '2024-02-20',
      tipo: 'Revisión',
      cliente: 'ABC Corporation'
    },
    {
      id: 2,
      titulo: 'Contactar cliente XYZ Limited',
      descripcion: 'Necesitamos información adicional para completar el proceso',
      prioridad: 'Media',
      fechaLimite: '2024-02-22',
      tipo: 'Contacto',
      cliente: 'XYZ Limited'
    },
    {
      id: 3,
      titulo: 'Validar datos de DEF Industries',
      descripcion: 'Verificar información proporcionada por el cliente',
      prioridad: 'Baja',
      fechaLimite: '2024-02-25',
      tipo: 'Validación',
      cliente: 'DEF Industries'
    },
    {
      id: 4,
      titulo: 'Actualizar sistema con GHI Solutions',
      descripcion: 'Sincronizar datos del cliente en el sistema',
      prioridad: 'Alta',
      fechaLimite: '2024-02-18',
      tipo: 'Actualización',
      cliente: 'GHI Solutions'
    }
  ];

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

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'Revisión':
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
      case 'Contacto':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'Validación':
        return <Clock className="w-4 h-4 text-green-500" />;
      case 'Actualización':
        return <XCircle className="w-4 h-4 text-purple-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const isUrgente = (fechaLimite: string) => {
    const hoy = new Date();
    const limite = new Date(fechaLimite);
    const diffTime = limite.getTime() - hoy.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 2;
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Pendientes</h1>
        <p className="text-gray-600 mt-2">Elementos pendientes de atención</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pendientes.map((pendiente) => (
          <div 
            key={pendiente.id} 
            className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
              isUrgente(pendiente.fechaLimite) 
                ? 'border-red-500' 
                : 'border-gray-300'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {getTipoIcon(pendiente.tipo)}
                  <h3 className="text-lg font-semibold text-gray-900 ml-2">
                    {pendiente.titulo}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{pendiente.descripcion}</p>
                <p className="text-sm text-gray-500">Cliente: {pendiente.cliente}</p>
              </div>
              <div className="ml-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPrioridadColor(pendiente.prioridad)}`}>
                  {pendiente.prioridad}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>Fecha límite: {pendiente.fechaLimite}</span>
              </div>
              {isUrgente(pendiente.fechaLimite) && (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                  Urgente
                </span>
              )}
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-primary-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                Completar
              </button>
              <button className="flex-1 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Posponer
              </button>
              <button className="flex-1 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumen de Pendientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">3</div>
            <div className="text-sm text-gray-600">Urgentes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <div className="text-sm text-gray-600">Media Prioridad</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-sm text-gray-600">Baja Prioridad</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pendientes;
