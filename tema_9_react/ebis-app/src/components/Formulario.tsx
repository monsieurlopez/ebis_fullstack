import React from 'react';
import type { FC } from 'react';

// ✅ Props para InputText
interface InputTextProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// ✅ Componente secundario 1
export const InputText: FC<InputTextProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border px-2 py-1 w-full"
      />
    </div>
  );
};

// ✅ Props para SubmitButton
interface SubmitButtonProps {
  text: string;
}

// ✅ Componente secundario 2
export const SubmitButton: FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-xs"
    >
      {text}
    </button>
  );
};

// ✅ Componente principal
const Formulario: FC = () => {
  const [nombre, setNombre] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <InputText
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <InputText
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <SubmitButton text="Enviar" />
    </form>
  );
};

export default Formulario;
