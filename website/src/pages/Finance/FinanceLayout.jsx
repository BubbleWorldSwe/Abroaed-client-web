import React from 'react';
import FinanceForm from './FinanceForm';
import Header from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import FinanceHeader from './FinanceHeader';

function FinanceLayout() {
  return (
    <div>
      <Header />
      <FinanceHeader />
      <FinanceForm />
      <Footer />
    </div>
  );
}

export default FinanceLayout;
