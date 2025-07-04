import 'flowbite';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Header, Footer, Layout, Main2 } from './layouts/indexLayouts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*
    <Layout header={<Header />} main={<Main />} footer={<Footer />} />
    */}
    <Layout header={<Header />} main={<Main2 />} footer={<Footer />} />
  </StrictMode>
);
