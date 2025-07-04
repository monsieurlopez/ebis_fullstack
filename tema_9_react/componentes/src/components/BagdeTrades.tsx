type TransactionBadgeProps = {
  type: 'Compra' | 'Venta' | 'Otro';
};

export const BadgeTrades: React.FC<TransactionBadgeProps> = ({ type }) => {
  const colorMap = {
    Compra: 'bg-green-100 text-green-800 border border-green-400',
    Venta: 'bg-red-100 text-red-800 border border-red-400',
    Otro: 'bg-gray-100 text-gray-800 border border-gray-500',
  };

  return (
    <span
      className={`text-xs font-medium me-2 px-3.5 py-1 rounded-2xl ${colorMap[type]}`}
    >
      {type}
    </span>
  );
};
