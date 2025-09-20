import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header className="relative z-50" />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;