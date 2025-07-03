import React from 'react';
import LogoReact from '../assets/react.svg';
import { items } from '../data/items';
import Formulario, { InputText, SubmitButton } from '../components/Formulario';
import {
  CustomButton,
  Tarjeta,
  Perfil,
  ListaItems,
  Notificacion,
  EstadoTarea,
  ListaTareas,
  CreateTable,
} from '../components/indexComponets';

const Main: React.FC = () => {
  //* Para el componente ListaItems *//
  const datos = [
    { id: 1, name: 'Cristiano Ronaldo' },
    { id: 2, name: 'Lionel Messi' },
    { id: 3, name: 'Luis Suarez' },
    { id: 4, name: 'Neymar Jr' },
    { id: 5, name: 'Kylian Mbappe' },
    { id: 6, name: 'Robert Lewandowski' },
    { id: 7, name: 'Harry Kane' },
    { id: 8, name: 'Erling Haaland' },
    { id: 9, name: 'Mohamed Salah' },
    { id: 10, name: 'Sadio Mane' },
  ];

  //* Para el componente ListaTareas *//
  const tareasDemo = [
    { id: 1, titulo: 'Estudiar React', completada: true },
    { id: 2, titulo: 'Leer documentación de TypeScript', completada: false },
    { id: 3, titulo: 'Practicar con proyectos', completada: true },
    { id: 4, titulo: 'Hacer ejercicios de lógica', completada: false },
  ];
  return (
    <main className="flex-grow w-full m-auto bg-white mt-18 text-center justify-items-center mb-3">
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

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Perfiles:</h2>
      <div className="flex flex-wrap max-auto gap-2">
        <div>
          <h2 className="text-xl font-semibold mb-2">Usuario 1</h2>
          <Perfil nombre="John Doe" correo="john@example.com" edad={30} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Usuario 2</h2>
          <Perfil nombre="John Doe" edad={30} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Usuario 3</h2>
          <Perfil correo="john@example.com" edad={30} />
        </div>
      </div>

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Lista de Elementos:</h2>
      <div className="max-w-md flex flex-wrap max-auto gap-2 min-w-200 justify-center">
        <ListaItems items={datos} />
      </div>

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Notificaciones:</h2>
      <div className="max-w-md flex flex-wrap max-auto gap-2 min-w-200 justify-center">
        <Notificacion message="Mensaje de éxito" color="green" id={'exito'} />
        <Notificacion
          message="Mensaje de alerta"
          color="yellow"
          id={'alerta'}
        />
        <Notificacion message="Mensaje de error" color="red" id={'error'} />
      </div>

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Estado de las Tareas:</h2>
      <div className="max-w-md flex flex-wrap max-auto gap-2 min-w-200 justify-center">
        <EstadoTarea completada={true} />
        <EstadoTarea completada={false} />
      </div>

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Listado de Tareas:</h2>
      <div className="max-w-md flex flex-wrap max-auto gap-2 min-w-200 justify-center">
        <ListaTareas tareas={tareasDemo} />
      </div>

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Tabla:</h2>
      <div className="max-w-md flex flex-wrap max-auto gap-2 min-w-200 justify-center">
        <CreateTable items={items} pageSize={10} />
      </div>
    </main>
  );
};

export default Main;
