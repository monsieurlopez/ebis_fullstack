import React from 'react';

type CardCompanyProps = {
  img?: string;
  name: string;
  symbol: string;
  cik: number;
};

export const CardCompany: React.FC<CardCompanyProps> = ({
  img,
  name,
  symbol,
  cik,
}) => {
  return (
    <div className="p-4 flex items-center space-x-4 w-auto mx-auto bg-white dark:bg-gray-800 rounded-lg shadow">
      {img && (
        <img
          src={img}
          alt={name}
          className="w-16 h-16 object-contain rounded-full"
        />
      )}
      <div className="flex flex-col text-center space-y-1">
        <div className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </div>
        <div className="text-md text-gray-500 dark:text-gray-400">
          ({symbol})
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          CIK: {cik}
        </div>
      </div>
    </div>
  );
};
