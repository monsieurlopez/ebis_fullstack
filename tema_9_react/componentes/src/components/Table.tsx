import { useEffect, useState } from 'react';
//import type { InsiderTrade } from '../data/insider_trades';
import type { DataType } from '../data/data';
import { LinkButton } from '../components/LinkButton';
import { InfoIcon } from '../components/InfoIcon';
import { BadgeTrades } from '../components/BagdeTrades';
import type { DateFilterOption } from '../components/DateFilter';
import { DateFilter } from '../components/DateFilter';
//import { data } from '../data/data';

import {
  transactionTypeGroup,
  transactionDescriptions,
} from '../data/dic_trades';

type CreateTableProps = {
  items: DataType[];
  pageSize?: number;
};

export const CreateTable = ({ items, pageSize = 10 }: CreateTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState<DateFilterOption>('all');
  const [rowSelection, setRowSelection] = useState<string[]>([]);

  //* Función para obtener el id de cada fila *//
  const getRowId = (item: DataType) => {
    //const idToString: string = item.id.toString();
    //return `row-${idToString}`;
    const idRow = item.id.split('-').join('');
    return `row-${idRow}`;
  };

  //* Obtener las claves de los objetos para usarlas como headers *//
  const columns: (keyof DataType)[] = [
    'date',
    'name',
    'transaction',
    'amount',
    'price',
    'document',
  ];

  //* Filtrar items según dateFilter *//
  const isInDateRange = (date: Date): boolean => {
    const now = new Date();
    const d = new Date(date);

    switch (dateFilter) {
      case 'today':
        return d.toDateString() === now.toDateString();
      case 'last7days':
        return d >= new Date(now.setDate(now.getDate() - 7));
      case 'last30days':
        return d >= new Date(now.setDate(now.getDate() - 30));
      case 'currentYear':
        return d.getFullYear() === new Date().getFullYear();
      case 'last365days':
        const oneYearAgo = new Date();
        oneYearAgo.setDate(now.getDate() - 365);
        return d >= oneYearAgo;
      case 'all':
      default:
        return true;
    }
  };

  //* Filtrar items según searchTerm buscando en todas las columnas (propiedades) *//
  const filteredItems = items
    .filter((item) => isInDateRange(new Date(item.date)))
    .filter((item) => {
      return columns.some((col) => {
        const rawValue = item[col];

        if (col === 'transaction') {
          const group =
            transactionTypeGroup[item.transaction]?.toLowerCase() ?? '';
          const description =
            transactionDescriptions[item.transaction]?.toLowerCase() ?? '';
          return (
            group.includes(searchTerm.toLowerCase()) ||
            description.includes(searchTerm.toLowerCase())
          );
        }

        if (col === 'name') {
          return (
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.officer_title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        if (rawValue instanceof Date) {
          return rawValue
            .toLocaleDateString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        }

        return String(rawValue)
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
    });

  //* Manejador de cambio de páginas *//
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Resetea la página a 1 cuando cambia la búsqueda //
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  //* Selección de filas individuales *//
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowId: string
  ) => {
    const isChecked = e.target.checked;

    setRowSelection((prev) =>
      isChecked ? [...prev, rowId] : prev.filter((id) => id !== rowId)
    );
  };

  //* Selección de todas las filas disponibles *//
  const checkAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const allIds = filteredItems.map(getRowId);

    setRowSelection((prevSelected) => {
      if (isChecked) {
        return Array.from(new Set([...prevSelected, ...allIds]));
      } else {
        return prevSelected.filter((id) => !allIds.includes(id));
      }
    });
  };

  //* Función para formatear el amount *//
  function formatAmount(value: number): string {
    if (value < 1000000) {
      return value.toLocaleString('en-US');
    }

    const millions = Math.floor(value / 1000000);
    const rest = value % 1000000;

    return `${millions.toLocaleString('en-US').replace(/,/g, ' ')} ${rest.toLocaleString('en-US')}`;
  }

  useEffect(() => {
    //console.log(data);
    console.log(rowSelection);
  }, [rowSelection]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 w-full lg:w-3/4 mx-auto px-2 sm:px-4 max-h-[700px]">
      <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        {/*Dropdown de filtrar */}
        <DateFilter value={dateFilter} onChange={setDateFilter} />
        {/* Barra de búsqueda */}
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Tabla */}
      <table className="w-full text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center min-h-[250px]">
        <thead className="text-[10px] sm:text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-2 sm:p-3 md:p-4">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={
                  filteredItems.length > 0 &&
                  filteredItems.every((item) =>
                    rowSelection.includes(getRowId(item))
                  )
                }
                onChange={checkAll}
              />
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {paginatedItems.map((item) => {
            const rowId = getRowId(item);
            return (
              <tr
                key={rowId}
                data-row-id={rowId}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-2 sm:p-3 md:p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={rowSelection.includes(rowId)}
                    onChange={(e) => handleCheckboxChange(e, rowId)}
                  />
                </td>
                {columns.map((col) => {
                  const value = item[col as keyof typeof item];
                  const rawCode = item.transaction;
                  const group = transactionTypeGroup[rawCode] ?? 'Otro';
                  const description =
                    transactionDescriptions[rawCode] ??
                    'Descripción desconocida';

                  return (
                    <td
                      key={col}
                      className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm"
                    >
                      {col === 'transaction' ? (
                        <div className="flex items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm">
                          <BadgeTrades
                            type={
                              group === 'Compra'
                                ? 'Compra'
                                : group === 'Venta'
                                  ? 'Venta'
                                  : 'Otro'
                            }
                          />
                          <InfoIcon description={description} />
                        </div>
                      ) : col === 'document' ? (
                        <div className="flex items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm">
                          <LinkButton url={value as string} />
                        </div>
                      ) : col === 'amount' ? (
                        (() => {
                          const { amount, shares_owned_following_transaction } =
                            item;
                          const isBuy = group === 'Compra';
                          const isSell = group === 'Venta';

                          if (!isBuy && !isSell) {
                            return (
                              <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-semibold">
                                {amount}
                              </span>
                            );
                          }

                          const previousShares = isSell
                            ? shares_owned_following_transaction + amount
                            : shares_owned_following_transaction - amount;

                          const changePercent =
                            previousShares > 0
                              ? ((amount / previousShares) * 100).toFixed(3)
                              : '0.000';

                          const arrow = isBuy ? '▲' : '▼';
                          const colorClass = isBuy
                            ? 'text-green-600'
                            : 'text-red-600';

                          return (
                            <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm">
                              <span className="font-semibold text-gray-600">
                                {formatAmount(amount)}
                              </span>
                              <span
                                className={`italic flex items-center whitespace-nowrap gap-1 ${colorClass}`}
                              >
                                {arrow} {changePercent}%
                              </span>
                            </div>
                          );
                        })()
                      ) : col === 'name' ? (
                        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm">
                          <span className="font-semibold text-gray-600">
                            {item.name}
                          </span>
                          <span className="italic text-[9px] sm:text-[11px] md:text-xs">
                            {item.officer_title}
                          </span>
                        </div>
                      ) : col === 'price' ? (
                        <span className="text-[10px] sm:text-xs md:text-sm">
                          ${Number(value ?? 0).toFixed(2)}
                        </span>
                      ) : value instanceof Date ? (
                        value.toLocaleDateString()
                      ) : (
                        <span className="text-[10px] sm:text-xs md:text-sm">
                          {value}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
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
            {totalItems === 0 ? 0 : startItem}-{endItem}
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
