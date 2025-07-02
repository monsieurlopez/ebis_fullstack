type ListaItemsProps = {
  items: { id: number; name: string }[];
};

export const ListaItems: React.FC<ListaItemsProps> = ({ items }) => {
  return (
    <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 rounded shadow min-w-80">
      {items.map((item) => (
        <li key={item.id} className="text-gray-800 py-1">
          {item.name}
        </li>
      ))}
    </ul>
  );
};
