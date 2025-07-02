import React from 'react';
import Formulario, { InputText, SubmitButton } from '../components/Formulario';
import { CustomButton } from '../components/CustomButton';

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

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Botones Personalizados:</h2>
      <div className="max-w-md display-inline space-x-1">
        <CustomButton
          onClick={() => {
            console.log('Click default');
          }}
        />
        <CustomButton
          text="Button 2"
          onClick={() => {
            console.log('Click button 2');
          }}
        />
        <CustomButton
          text="Button 3"
          color="gray"
          size="lg"
          onClick={() => {
            console.log('Click button 3');
          }}
        />
        <CustomButton
          text="Button 4"
          color="red"
          size="xs"
          onClick={() => {
            console.log('Click button 4');
          }}
        />
      </div>
    </main>
  );
};

export default Main;
