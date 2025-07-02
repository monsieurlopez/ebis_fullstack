import React, { useState } from 'react';

type Tarea = {
  id: number;
  titulo: string;
  completada: boolean;
};

type ListaTareasProps = {
  tareas: Tarea[];
};

export const ListaTareas: React.FC<ListaTareasProps> = ({ tareas }) => {
  const [filtro, setFiltro] = useState<'todas' | 'completadas' | 'pendientes'>(
    'todas'
  );

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'pendientes') return !tarea.completada;
    return true;
  });

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-md shadow-md">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFiltro('todas')}
          className={`px-3 py-1 rounded ${
            filtro === 'todas' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => setFiltro('completadas')}
          className={`px-3 py-1 rounded ${
            filtro === 'completadas' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
        >
          Completadas
        </button>
        <button
          onClick={() => setFiltro('pendientes')}
          className={`px-3 py-1 rounded ${
            filtro === 'pendientes' ? 'bg-yellow-500 text-white' : 'bg-gray-200'
          }`}
        >
          Pendientes
        </button>
      </div>

      <ul className="space-y-2">
        {tareasFiltradas.map((tarea) => (
          <li
            key={tarea.id}
            className={`p-2 border rounded ${
              tarea.completada ? 'bg-green-100' : 'bg-yellow-100'
            }`}
          >
            {tarea.titulo}
          </li>
        ))}
        {tareasFiltradas.length === 0 && (
          <li className="text-gray-500 italic">
            No hay tareas en este filtro.
          </li>
        )}
      </ul>
    </div>
  );
};
