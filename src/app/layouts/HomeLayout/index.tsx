import React from 'react';
import Header from 'app/components/Header';

const HomeLayout: React.FC = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default HomeLayout;
