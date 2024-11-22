import React from "react";
import FinanceForm from "../pages/Finance/FinanceForm";
import FinanceHeader from "../pages/Finance/FinanceHeader";
import Footer from "../components/Footer";
import Header from "../Components/Header";

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
