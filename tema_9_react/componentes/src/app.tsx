import 'flowbite';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Header, Main, Footer, Layout } from './layouts/indexLayouts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout header={<Header />} main={<Main />} footer={<Footer />} />
  </StrictMode>
);
