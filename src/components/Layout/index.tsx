import React, { ReactNode } from 'react';

type LayoutProperties = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProperties) => (
  <div className="bg-gray-800 font-brand">{children}</div>
);

export default Layout;
