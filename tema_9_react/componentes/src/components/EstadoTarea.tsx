type EstadoTareaProps = {
  completada: boolean;
};

export const EstadoTarea: React.FC<EstadoTareaProps> = ({ completada }) => {
  return (
    <div
      className={`flex items-center gap-2 p-2 rounded-md ${
        completada
          ? 'bg-green-100 text-green-800'
          : 'bg-yellow-100 text-yellow-800'
      }`}
    >
      {completada ? (
        <>
          <span>✅</span>
          <span>Tarea completada</span>
        </>
      ) : (
        <>
          <span>🕓</span>
          <span>Tarea pendiente</span>
        </>
      )}
    </div>
  );
};
