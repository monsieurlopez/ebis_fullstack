import React, { useState } from 'react';
import filterIcon from '../assets/Icons/filter.svg';

export type DateFilterOption =
  | 'all'
  | 'today'
  | 'last7days'
  | 'last30days'
  | 'currentYear'
  | 'lastYear';

type FilterProps = {
  value: DateFilterOption;
  onChange: (filter: DateFilterOption) => void;
};

const options: { label: string; value: DateFilterOption }[] = [
  { label: 'All', value: 'all' },
  { label: 'Today', value: 'today' },
  { label: 'Last 7 days', value: 'last7days' },
  { label: 'Last 30 days', value: 'last30days' },
  { label: 'Current year', value: 'currentYear' },
  { label: 'Last year', value: 'lastYear' },
];

export const DateFilter: React.FC<FilterProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const selected =
    options.find((opt) => opt.value === value)?.label || 'Select';

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        {/* Icon */}
        <img
          src={filterIcon}
          alt="icono de filtro"
          className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3"
        />
        {selected}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
            {options.map((opt) => (
              <li key={opt.value}>
                <div
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className="flex items-center p-2 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <input
                    type="radio"
                    name="filter-radio"
                    checked={value === opt.value}
                    readOnly
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {opt.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
