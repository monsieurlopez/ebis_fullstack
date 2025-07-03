import { useState } from 'react';
import type { Product } from '../data/items';

type CreateTableProps = {
  items: Product[];
  pageSize?: number;
};

export const CreateTable = ({ items, pageSize = 10 }: CreateTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedItems = items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  // Obtener las claves de los objetos para usarlas como headers
  const columns = items.length > 0 ? Object.keys(items[0]) : [];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
      {/* ... Filtros y barra de búsqueda (sin cambios) ... */}

      {/* Tabla */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-4">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            {columns.map((col) => (
              <th key={col} className="px-8 py-3">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((item, index) => (
            <tr
              key={item.id || index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              {columns.map((col) => (
                <td key={col} className="px-8 py-4">
                  {col === 'price' ? `$${item[col]}` : item[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <nav
        className="flex items-center justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {startItem}-{endItem}
          </span>{' '}
          of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalItems}
          </span>
        </span>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, i) => (
            <li key={i}>
              <button
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 h-8 leading-tight border ${
                  currentPage === i + 1
                    ? 'text-blue-600 bg-blue-50 border-blue-300 dark:bg-gray-700 dark:text-white'
                    : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
