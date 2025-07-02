import React from 'react';
import Formulario, { InputText, SubmitButton } from '../components/Formulario';
import { CustomButton } from '../components/CustomButton';
import { Tarjeta } from '../components/Tarjeta';
import LogoReact from '../assets/react.svg';

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

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Tarjetas Personalizadas:</h2>
      <div className="max-w-md flex flex-wrap max-auto gap-2">
        <Tarjeta>
          <h3 className="text-xl font-bold mb-2">CSS</h3>
          <svg
            className="w-8 h-8 text-gray-800 dark:text-white mx-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
          </svg>
        </Tarjeta>
        <Tarjeta>
          <h3 className="text-xl font-bold mb-2">React</h3>
          <img src={LogoReact} alt="Logo React" className="rounded mx-auto" />
        </Tarjeta>
        <Tarjeta>
          <h3 className="text-xl font-bold mb-2">HTML 5</h3>
          <svg
            className="w-8 h-8 text-gray-800 dark:text-white mx-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
          </svg>
        </Tarjeta>
      </div>
    </main>
  );
};

export default Main;
