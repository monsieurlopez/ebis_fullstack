import React from 'react';
import { data } from '../data/insider_trades';
import { CreateTable } from '../components/indexComponets';

const MainTable: React.FC = () => {
  return (
    <main className="flex-grow w-full m-auto bg-white mt-18 text-center justify-items-center mb-3">
      <h1 className="text-4xl font-semibold mb-2">Custom Table</h1>
      <div className="max-w-md flex flex-wrap max-auto gap-2 min-w-200 justify-center">
        <CreateTable items={data} pageSize={5} />
      </div>
    </main>
  );
};

export default MainTable;
