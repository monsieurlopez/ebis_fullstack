import { Navbar } from './Navbar';
import { useEffect } from 'react';

export const Header = () => {
  useEffect(() => {
    // Esto asegura que Flowbite inicialice los componentes interactivos
  }, []);
  return (
    <header className="w-full border border-red-500 fixed top-0 left-0 z-50 bg-white">
      <Navbar />
    </header>
  );
};
