import { Navbar } from './Navbar';
import { useEffect } from 'react';

export const Header = () => {
  useEffect(() => {}, []);
  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-white">
      <Navbar />
    </header>
  );
};
