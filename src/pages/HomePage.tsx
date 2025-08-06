import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;