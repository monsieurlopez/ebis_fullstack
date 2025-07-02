import React from 'react';
import type { ReactNode } from 'react';

type TarjetaProps = {
  children: ReactNode;
};

export const Tarjeta: React.FC<TarjetaProps> = ({ children }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 bg-white w-auto max-w-48 min-w-32">
      {children}
    </div>
  );
};
