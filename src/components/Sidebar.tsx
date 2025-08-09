import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Clock, 
  CheckSquare,
  Settings,
  UserCheck
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      path: '/clientes',
      name: 'Clientes',
      icon: Users
    },
    {
      path: '/procesos',
      name: 'Procesos',
      icon: FileText
    },
    {
      path: '/pendientes',
      name: 'Pendientes',
      icon: Clock
    },
    {
      path: '/tareas',
      name: 'Tareas',
      icon: CheckSquare
    },
    {
      path: '/asignacion',
      name: 'Asignación',
      icon: UserCheck
    },
    {
      path: '/configuracion',
      name: 'Configuración',
      icon: Settings
    }
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Ramallo App</h1>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-gray-700 rounded-lg transition-colors duration-200 hover:bg-primary-50 hover:text-primary-600 ${
                    isActive 
                      ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-600' 
                      : ''
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
