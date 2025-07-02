import { Navbar } from './Navbar';
import { useEffect } from 'react';

export const Header: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <header className="w-full top-0 z-50 bg-white">
      <Navbar />
    </header>
  );
};
