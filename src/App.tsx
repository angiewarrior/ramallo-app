import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Clientes from './components/Clientes';
import Procesos from './components/Procesos';
import Pendientes from './components/Pendientes';
import Tareas from './components/Tareas';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/procesos" element={<Procesos />} />
            <Route path="/pendientes" element={<Pendientes />} />
            <Route path="/tareas" element={<Tareas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
