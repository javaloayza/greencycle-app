import React, { ReactNode } from 'react';
import { NavBar } from '../NavBar';
import "./Layout.scss"

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <main>
      {/* <NavBar /> */}
      <section className="container">{children}</section>
    </main>
  );
};


