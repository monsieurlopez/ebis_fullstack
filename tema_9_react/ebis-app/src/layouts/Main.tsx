import React from 'react';
import Formulario, { InputText, SubmitButton } from '../components/Formulario';

const Main: React.FC = () => {
  return (
    <main className="flex-grow w-full m-auto bg-white mt-18 text-center justify-items-center">
      <h1 className="text-2xl font-bold mb-4">Demo de Formulario en TSX</h1>
      {/* ✅ Usamos el componente principal */}
      <Formulario />

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Componentes Individuales:</h2>

      {/* ✅ También los secundarios por separado */}
      <div className="max-w-md">
        <InputText label="Campo aislado" value="" onChange={() => {}} />
        <SubmitButton text="Botón aislado" />
      </div>
    </main>
  );
};

export default Main;
