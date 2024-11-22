import React from "react";
import FinanceForm from "../pages/Finance/FinanceForm";
import FinanceHeader from "../pages/Finance/FinanceHeader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
