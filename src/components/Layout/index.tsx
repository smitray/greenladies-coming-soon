import React, { ReactNode } from 'react';

type LayoutProperties = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProperties) => (
  <div className="bg-black ont-brand">{children}</div>
);

export default Layout;
