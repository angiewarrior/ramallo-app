import React, { useState } from 'react';
import { Users, Clock, UserCheck, Settings } from 'lucide-react';

const Configuracion = () => {
  const [activeTab, setActiveTab] = useState('asesores');

  const tabs = [
    {
      id: 'asesores',
      name: 'Asesores',
      icon: Users
    },
    {
      id: 'tiempos',
      name: 'Tiempos',
      icon: Clock
    },
    {
      id: 'clientes',
      name: 'Clientes',
      icon: UserCheck
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'asesores':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Gestión de Asesores</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Asesores Activos</h4>
                  <p className="text-2xl font-bold text-primary-600">12</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Asesores Inactivos</h4>
                  <p className="text-2xl font-bold text-gray-500">3</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Total Asesores</h4>
                  <p className="text-2xl font-bold text-gray-800">15</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Lista de Asesores</h3>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Agregar Asesor
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Nombre</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Estado</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">María González</td>
                      <td className="py-3 px-4">maria@example.com</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          Activo
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-primary-600 hover:text-primary-800 mr-2">Editar</button>
                        <button className="text-red-600 hover:text-red-800">Eliminar</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Carlos Rodríguez</td>
                      <td className="py-3 px-4">carlos@example.com</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          Activo
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-primary-600 hover:text-primary-800 mr-2">Editar</button>
                        <button className="text-red-600 hover:text-red-800">Eliminar</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'tiempos':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Configuración de Tiempos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Tiempos de Respuesta</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Respuesta inicial (horas)</label>
                      <input 
                        type="number" 
                        className="border border-gray-300 rounded-lg px-3 py-2 w-20"
                        defaultValue={24}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Seguimiento (días)</label>
                      <input 
                        type="number" 
                        className="border border-gray-300 rounded-lg px-3 py-2 w-20"
                        defaultValue={7}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Escalación (días)</label>
                      <input 
                        type="number" 
                        className="border border-gray-300 rounded-lg px-3 py-2 w-20"
                        defaultValue={14}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Horarios de Trabajo</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Hora de inicio</label>
                      <input 
                        type="time" 
                        className="border border-gray-300 rounded-lg px-3 py-2"
                        defaultValue="09:00"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Hora de fin</label>
                      <input 
                        type="time" 
                        className="border border-gray-300 rounded-lg px-3 py-2"
                        defaultValue="18:00"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Días laborables</label>
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Lunes - Viernes</option>
                        <option>Lunes - Sábado</option>
                        <option>Todos los días</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Guardar Configuración
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'clientes':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Configuración de Clientes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Clientes Activos</h4>
                  <p className="text-2xl font-bold text-primary-600">156</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Clientes Potenciales</h4>
                  <p className="text-2xl font-bold text-yellow-600">23</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Total Clientes</h4>
                  <p className="text-2xl font-bold text-gray-800">179</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">Configuración de Categorías</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Categoría Premium</label>
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        defaultChecked
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Categoría Estándar</label>
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        defaultChecked
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Categoría Básica</label>
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        defaultChecked
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Notificaciones automáticas</label>
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        defaultChecked
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Recordatorios por email</label>
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        defaultChecked
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-gray-600">Seguimiento automático</label>
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Guardar Configuración
                </button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Settings className="w-6 h-6 text-primary-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Configuración</h1>
        </div>
        <p className="text-gray-600">Gestiona la configuración general de la aplicación</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Configuracion;
