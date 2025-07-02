import React from 'react';
import { type ReactNode } from 'react';

type LayoutProps = {
  header?: ReactNode;
  main?: ReactNode;
  footer?: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ header, main, footer }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {header}
      <main className="flex-grow">{main}</main>
      {footer}
    </div>
  );
};
