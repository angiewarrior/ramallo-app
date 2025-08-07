import React, { useState } from 'react';
import { Plus, Play, Pause, CheckCircle, Clock, ChevronRight, ChevronDown, FileText, User, Building, FileCheck, Users, PenTool, Zap, Home } from 'lucide-react';

const Procesos = () => {
  const [expandedFlujo, setExpandedFlujo] = useState<number | null>(null);

  const flujosTrabajo = [
    {
      id: 1,
      nombre: 'Cliente Comprador',
      descripcion: 'Flujo completo para clientes que adquieren una propiedad',
      estado: 'En Proceso',
      progreso: 45,
      fechaInicio: '2024-02-15',
      fechaEstimada: '2024-03-15',
      cliente: 'ABC Corporation',
      tareas: [
        {
          id: 1,
          nombre: 'Bienvenida',
          descripcion: 'Contacto inicial y presentación del proceso',
          estado: 'Completado',
          icon: User,
          color: 'bg-green-500',
          fechaCompletado: '2024-02-16'
        },
        {
          id: 2,
          nombre: 'Poder notarial',
          descripcion: 'Gestión y obtención del poder notarial',
          estado: 'Completado',
          icon: FileText,
          color: 'bg-green-500',
          fechaCompletado: '2024-02-18'
        },
        {
          id: 3,
          nombre: 'Tramitaciones paralelas',
          descripcion: 'Inicio de trámites administrativos en paralelo',
          estado: 'En Proceso',
          icon: Zap,
          color: 'bg-blue-500',
          fechaInicio: '2024-02-20'
        },
        {
          id: 4,
          nombre: 'Due Diligence',
          descripcion: 'Verificación exhaustiva de la propiedad',
          estado: 'En Proceso',
          icon: FileCheck,
          color: 'bg-blue-500',
          fechaInicio: '2024-02-22'
        },
        {
          id: 5,
          nombre: 'Contrato privado de compraventa',
          descripcion: 'Elaboración y firma del contrato privado',
          estado: 'Pendiente',
          icon: Users,
          color: 'bg-yellow-500'
        },
        {
          id: 6,
          nombre: 'Escritura pública',
          descripcion: 'Preparación de la escritura pública',
          estado: 'Pendiente',
          icon: Building,
          color: 'bg-gray-400'
        },
        {
          id: 7,
          nombre: 'Firma en notaría',
          descripcion: 'Firma de la escritura en la notaría',
          estado: 'Pendiente',
          icon: PenTool,
          color: 'bg-gray-400'
        },
        {
          id: 8,
          nombre: 'Alta de suministros',
          descripcion: 'Gestión de alta de servicios y suministros',
          estado: 'Pendiente',
          icon: Home,
          color: 'bg-gray-400'
        },
        {
          id: 9,
          nombre: 'Cierre del proceso',
          descripcion: 'Finalización y entrega de documentación',
          estado: 'Pendiente',
          icon: CheckCircle,
          color: 'bg-gray-400'
        }
      ]
    },
    {
      id: 2,
      nombre: 'Cliente Vendedor',
      descripcion: 'Flujo para clientes que venden una propiedad',
      estado: 'Pendiente',
      progreso: 0,
      fechaInicio: '2024-02-25',
      fechaEstimada: '2024-03-25',
      cliente: 'XYZ Limited',
      tareas: []
    },
    {
      id: 3,
      nombre: 'Inversión Inmobiliaria',
      descripcion: 'Flujo para inversiones en propiedades',
      estado: 'Completado',
      progreso: 100,
      fechaInicio: '2024-01-15',
      fechaEstimada: '2024-02-15',
      cliente: 'DEF Industries',
      tareas: []
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

  const toggleFlujo = (flujoId: number) => {
    setExpandedFlujo(expandedFlujo === flujoId ? null : flujoId);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Procesos</h1>
          <p className="text-gray-600 mt-2">Gestión de flujos de trabajo del sistema</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Flujo
        </button>
      </div>

      <div className="space-y-6">
        {flujosTrabajo.map((flujo) => (
          <div key={flujo.id} className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{flujo.nombre}</h3>
                    <span className={`ml-3 px-2 py-1 text-xs font-semibold rounded-full ${getEstadoColor(flujo.estado)}`}>
                      {flujo.estado}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{flujo.descripcion}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Cliente: {flujo.cliente}</span>
                    <span>Inicio: {flujo.fechaInicio}</span>
                    <span>Estimado: {flujo.fechaEstimada}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{flujo.progreso}%</div>
                    <div className="text-xs text-gray-500">Progreso</div>
                  </div>
                  <button
                    onClick={() => toggleFlujo(flujo.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {expandedFlujo === flujo.id ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progreso General</span>
                  <span>{flujo.progreso}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${flujo.progreso}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {expandedFlujo === flujo.id && flujo.tareas.length > 0 && (
              <div className="p-6 bg-gray-50">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Tareas del Flujo</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {flujo.tareas.map((tarea) => (
                    <div key={tarea.id} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${tarea.color} text-white`}>
                          <tarea.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900">{tarea.nombre}</h5>
                          <p className="text-sm text-gray-600 mt-1">{tarea.descripcion}</p>
                          <div className="flex items-center mt-2">
                            {getEstadoIcon(tarea.estado)}
                            <span className={`ml-1 px-2 py-1 text-xs font-semibold rounded-full ${getEstadoColor(tarea.estado)}`}>
                              {tarea.estado}
                            </span>
                          </div>
                          {tarea.fechaCompletado && (
                            <p className="text-xs text-green-600 mt-1">
                              Completado: {tarea.fechaCompletado}
                            </p>
                          )}
                          {tarea.fechaInicio && (
                            <p className="text-xs text-blue-600 mt-1">
                              Iniciado: {tarea.fechaInicio}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumen de Flujos</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {flujosTrabajo.filter(f => f.estado === 'En Proceso').length}
            </div>
            <div className="text-sm text-gray-600">En Proceso</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {flujosTrabajo.filter(f => f.estado === 'Pendiente').length}
            </div>
            <div className="text-sm text-gray-600">Pendientes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {flujosTrabajo.filter(f => f.estado === 'Completado').length}
            </div>
            <div className="text-sm text-gray-600">Completados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">
              {flujosTrabajo.length}
            </div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procesos;
