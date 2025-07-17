import React from 'react';

type CardCompanyProps = {
  img?: string;
  name: string;
  symbol: string;
  cik: string;
  sector: string;
};

export const CardCompany: React.FC<CardCompanyProps> = ({
  img,
  name,
  symbol,
  cik,
  sector,
}) => {
  return (
    <div className="p-4 flex flex-col items-center text-center space-y-2 w-64 mx-auto">
      {img && (
        <img
          src={img}
          alt={name}
          className="w-16 h-16 object-contain rounded-full"
        />
      )}
      <div className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">({symbol})</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">CIK: {cik}</div>
      <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
        {sector}
      </div>
    </div>
  );
};
