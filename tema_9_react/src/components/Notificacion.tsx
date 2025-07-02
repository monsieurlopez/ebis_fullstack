type NotificationProps = {
  id: string;
  color: 'green' | 'yellow' | 'red';
  message: string;
};

export const Notificacion: React.FC<NotificationProps> = ({
  id,
  color,
  message,
}) => {
  const colorClass = {
    green:
      'text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400',
    yellow:
      'text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300',
    red: 'text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400',
  };

  return (
    <div
      id={id}
      className={`p-4 mb-4 text-sm ${colorClass[color]}`}
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
};
