import React from 'react';

type CustomButtonProps = {
  onClick: () => void;
  text?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow';
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  text = 'Default Button',
  color = 'blue',
  size = 'md',
}) => {
  return (
    <button
      className={`focus:outline-none bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded text-${size} focus:ring-4 focus:ring-${color}-300 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-300`}
      onClick={onClick ?? (() => console.log('Click'))}
    >
      {text}
    </button>
  );
};
