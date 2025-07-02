import 'flowbite';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Header, Main, Footer } from './layouts/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  </StrictMode>
);
