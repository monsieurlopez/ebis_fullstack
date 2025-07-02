import React from 'react';

type PerfilProps = {
  nombre?: string;
  correo?: string;
  edad: number;
};

export const Perfil: React.FC<PerfilProps> = ({ nombre, correo, edad }) => {
  const errores: string[] = [];

  if (!nombre) {
    errores.push('El nombre es obligatorio');
  }

  if (!correo) {
    errores.push('El correo es obligatorio');
  }
  if (errores.length > 0) {
    return (
      <div className="border border-red-500 bg-red-100 p-4 text-red-700 rounded shadow w-auto h-auto max-w-48 min-w-32 max-h-48 min-h-32">
        <h3 className="font-bold mb-2">Error de validación</h3>
        <ul className="list-disc list-inside">
          {errores.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="border p-4 rounded shadow bg-white text-gray-800 w-auto h-auto max-w-48 min-w-32 max-h-48 min-h-32">
      <p>
        <strong>Nombre:</strong> {nombre}
      </p>
      <p>
        <strong>Correo:</strong> {correo}
      </p>
      {edad && (
        <p>
          <strong>Edad:</strong> {edad}
        </p>
      )}
    </div>
  );
};
