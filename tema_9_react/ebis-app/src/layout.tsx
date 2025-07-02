import 'flowbite';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Header } from './layouts/Header.tsx';
import { Footer } from './layouts/Footer.tsx';
import Main from './layouts/Main.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  </StrictMode>
);
