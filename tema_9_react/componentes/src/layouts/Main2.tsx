import React from 'react';
import { data } from '../data/insider_trades';
import { CreateTable } from '../components/indexComponets';

const Main2: React.FC = () => {
  return (
    <main className="flex-grow w-full bg-white mt-3 text-center mb-3 px-2 sm:px-4">
      <h1 className="text-4xl font-semibold mb-2">Custom Table</h1>
      <div className="max-w flex flex-wrap max-auto gap-2 justify-center">
        <CreateTable items={data} pageSize={10} />
      </div>
    </main>
  );
};

export default Main2;
